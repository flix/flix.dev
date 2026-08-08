// Posts for /blog/, parsed from the Atom feed that build-scripts/fetchBlogPosts.mjs
// downloads before Astro runs. Nothing here touches the network.

// ?raw is required: without it the bundler reads the .xml as source and fails to
// parse it. A .json needs no suffix, having a loader of its own.
import feedXml from '../data/blog-atom.xml?raw';

// Named only for the error message below.
const FEED = 'src/data/blog-atom.xml';

// Recent work only; the page links to blog.flix.dev for the archive.
const DEFAULT_LIMIT = 3;

// One entry as the page renders it.
/** @typedef {{title: string, url: string, author: string, date: string, dateISO: string, summary: string}} Post */

// The five entities XML predefines. Everything else arrives numerically.
const NAMED_ENTITIES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
};

// Zola escapes heavily -- URLs arrive with every slash as &#x2F;. One pass, so
// text that decodes to an entity reference is not decoded a second time.
function decodeEntities(xml) {
  return xml.replace(/&(?:#(\d+)|#x([\da-f]+)|([a-z]+));/gi, (match, dec, hex, name) => {
    if (dec) return String.fromCodePoint(Number(dec));
    if (hex) return String.fromCodePoint(parseInt(hex, 16));
    return NAMED_ENTITIES[name.toLowerCase()] ?? match;
  });
}

// Decoded text of the first matching child element, or '' if there is none.
function childText(entry, name) {
  const match = entry.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`));
  return match ? decodeEntities(match[1]).trim() : '';
}

// The post's own address. rel defaults to alternate when absent, and attribute
// order is the generator's whim, so neither is relied on.
function alternateLink(entry) {
  for (const [, attributes] of entry.matchAll(/<link\b([^>]*)>/g)) {
    const rel = attributes.match(/\brel="([^"]*)"/);
    if (rel && rel[1] !== 'alternate') continue;

    const href = attributes.match(/\bhref="([^"]*)"/);
    if (href) return decodeEntities(href[1]);
  }
  return '';
}

// First <author><name>. Atom allows several; the listing has room for one.
function authorName(entry) {
  const author = entry.match(/<author\b[^>]*>([\s\S]*?)<\/author>/);
  return author ? childText(author[1], 'name') : '';
}

// Renders a date as "30 January 2026".
const formatDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  // The feed timestamps midnight UTC; the build machine's own zone would put
  // every date a day early anywhere west of Greenwich.
  timeZone: 'UTC',
});

// Parsed once, when the module loads.
/** @type {Post[]} */
const posts = [];

// Entries missing a title, an address, or a usable date are skipped rather than
// rendered half-empty.
for (const [, entry] of feedXml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/g)) {
  const title = childText(entry, 'title');
  const url = alternateLink(entry);
  // <published> is absent until a post is dated; <updated> moves on every edit.
  const dateISO = childText(entry, 'published') || childText(entry, 'updated');
  if (!title || !url || !Number.isFinite(Date.parse(dateISO))) continue;

  posts.push({
    title,
    url,
    // Optional: a feed may omit it, which should not cost us the post.
    author: authorName(entry),
    dateISO,
    date: formatDate.format(new Date(dateISO)),
    // <summary type="html"> may legally hold markup; strip it rather than print
    // tags at the reader.
    summary: childText(entry, 'summary').replace(/<[^>]*>/g, '').trim(),
  });
}

// Parsing to nothing means the feed's shape changed. Fail the build rather than
// publish a page that looks finished and lists nothing.
if (posts.length === 0) {
  throw new Error(
    `Parsed zero entries out of ${FEED}, so the feed format has probably ` +
      `changed. Delete the file and re-run \`npm run fetch-blog-posts\` if it ` +
      `is merely stale.`,
  );
}

// Newest first. Feed order is conventional, not guaranteed.
posts.sort((a, b) => Date.parse(b.dateISO) - Date.parse(a.dateISO));

/**
 * The newest posts from the Flix blog, newest first.
 *
 * @param {number} [limit]
 * @returns {Post[]}
 */
export function recentPosts(limit = DEFAULT_LIMIT) {
  return posts.slice(0, limit);
}

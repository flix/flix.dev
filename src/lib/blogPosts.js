// Posts shown on /blog/, read out of the Atom feed that build-scripts/
// fetchBlogPosts.mjs downloads from blog.flix.dev before Astro runs.
//
// Nothing here touches the network: by the time this module loads, the feed is
// a file in the working tree like any other, so the page renders the same way
// on every build from the same checkout.

// ?raw hands over the file as a string at build time, the same way
// CodeSnippet.astro imports the TextMate grammar it is given.
import feedXml from '../data/blog-atom.xml?raw';

const FEED = 'src/data/blog-atom.xml';

// Kept to genuinely recent work rather than the whole archive, which the page
// links to blog.flix.dev for.
const DEFAULT_LIMIT = 3;

/** @typedef {{title: string, url: string, date: string, dateISO: string, summary: string}} Post */

const NAMED_ENTITIES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
};

// Zola escapes aggressively -- some URLs arrive with every slash as &#x2F; -- so
// nothing read out of the feed is usable before this. One pass, so text that
// decodes to an entity reference is left alone rather than decoded twice.
function decodeEntities(xml) {
  return xml.replace(/&(?:#(\d+)|#x([\da-f]+)|([a-z]+));/gi, (match, dec, hex, name) => {
    if (dec) return String.fromCodePoint(Number(dec));
    if (hex) return String.fromCodePoint(parseInt(hex, 16));
    return NAMED_ENTITIES[name.toLowerCase()] ?? match;
  });
}

function childText(entry, name) {
  const match = entry.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`));
  return match ? decodeEntities(match[1]).trim() : '';
}

// Atom puts the post's own address on <link rel="alternate">, and rel defaults
// to alternate when absent. Attributes are read out of the matched tag rather
// than pinned in one order, since which comes first is the generator's whim.
function alternateLink(entry) {
  for (const [, attributes] of entry.matchAll(/<link\b([^>]*)>/g)) {
    const rel = attributes.match(/\brel="([^"]*)"/);
    if (rel && rel[1] !== 'alternate') continue;

    const href = attributes.match(/\bhref="([^"]*)"/);
    if (href) return decodeEntities(href[1]);
  }
  return '';
}

const formatDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  // The feed timestamps posts at midnight UTC. Left to the build machine's zone
  // that lands on the previous evening anywhere west of Greenwich, and every
  // date on the page would be a day early.
  timeZone: 'UTC',
});

/** @type {Post[]} */
const posts = [];

for (const [, entry] of feedXml.matchAll(/<entry\b[^>]*>([\s\S]*?)<\/entry>/g)) {
  const title = childText(entry, 'title');
  const url = alternateLink(entry);
  // Entries always carry <updated> but only carry <published> once a post has
  // been dated. Sorting on the former would reshuffle the list every time an
  // old post got a typo fix.
  const dateISO = childText(entry, 'published') || childText(entry, 'updated');
  if (!title || !url || !Number.isFinite(Date.parse(dateISO))) continue;

  posts.push({
    title,
    url,
    dateISO,
    date: formatDate.format(new Date(dateISO)),
    // <summary type="html"> is entitled to hold markup. It is plain prose in
    // every post today, but a stray <p> would otherwise be printed at the
    // reader rather than rendered.
    summary: childText(entry, 'summary').replace(/<[^>]*>/g, '').trim(),
  });
}

// A feed that arrived intact and parsed to nothing means its shape has moved out
// from under the patterns above. Throwing during module evaluation fails the
// build, which is the point: the alternative is publishing a page that looks
// finished and lists nothing.
if (posts.length === 0) {
  throw new Error(
    `Parsed zero entries out of ${FEED}, so the feed format has probably ` +
      `changed. Delete the file and re-run \`npm run fetch-blog-posts\` if it ` +
      `is merely stale.`,
  );
}

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

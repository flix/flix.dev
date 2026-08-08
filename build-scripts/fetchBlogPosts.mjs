// The blog is a separate Zola site (github.com/flix/blog.flix.dev). Pulling its
// feed in lets /blog/ list the newest posts without anyone having to copy titles
// across every time one is published.
//
// Atom rather than the rss.xml beside it: the RSS feed inlines every post in
// full, which is twenty times the bytes for the same eight titles, and dates
// them in RFC-822, which Date.parse is not obliged to accept.
const URL = 'https://blog.flix.dev/atom.xml';
const DEST = 'src/data/blog-atom.xml';

import { fetchOnce } from './fetchOnce.mjs';

await fetchOnce({
  url: URL,
  dest: DEST,
  // blog.flix.dev answers a path it does not have with 200 and its index page
  // rather than a 404, so the status says nothing about whether a feed came
  // back. Only the body can.
  validate: (body) =>
    body.includes('<feed')
      ? undefined
      : 'it is not an Atom feed. The blog serves its index page with status 200 ' +
        'for paths it does not have, so a feed that moved or was turned off ' +
        'looks exactly like this.',
});

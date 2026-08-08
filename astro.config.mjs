import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://flix.dev',
  // Prefetch every internal link on hover; the nav links to nine pages.
  prefetch: {
    prefetchAll: true
  },
  integrations: [
    icon(),
    // /blog is a stub pointing at blog.flix.dev and /principles2 is an
    // unreleased draft; both are marked noindex, so neither belongs in the
    // sitemap either.
    sitemap({
      filter: (page) => !page.endsWith('/blog/') && !page.endsWith('/principles2/')
    })
  ]
});

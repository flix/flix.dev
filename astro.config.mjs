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
    // /blog only indexes posts that live on blog.flix.dev, so the pages worth
    // finding are all off-site. It stays noindex to keep it from competing with
    // them in search, and a noindex page does not belong in the sitemap either.
    sitemap({
      filter: (page) => !page.endsWith('/blog/')
    })
  ]
});

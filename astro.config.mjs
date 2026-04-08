import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://codehelp.io',
  integrations: [
    react(),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag']
      }
    })
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  },
  output: 'static'
});

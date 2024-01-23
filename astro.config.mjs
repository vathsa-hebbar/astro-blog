import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import sanity from 'astro-sanity';

export default defineConfig({
  site: 'https://taleviewer.dev',
  integrations: [
    tailwind(),
    sitemap(),
    sanity({
      projectId: '55d7az5p',
      dataset: 'production',
      apiVersion: 'v2021-10-21',
      useCdn: true,
    }),
  ],
});

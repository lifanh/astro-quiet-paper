// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-quiet-paper.lifanh.workers.dev/',
  integrations: [
    react(),
    sitemap({
      filter: (page) => new URL(page).pathname !== '/demo/',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['@lifanh/quiet-paper'],
    },
  },
});

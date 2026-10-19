// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

// GitHub Pages project site: https://stein-clankers.github.io/meinCH/
export default defineConfig({
  site: 'https://stein-clankers.github.io',
  base: '/meinCH',
  trailingSlash: 'always',
  integrations: [svelte(), mdx()],
});

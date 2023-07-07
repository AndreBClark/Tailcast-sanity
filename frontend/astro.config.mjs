import sanity from 'astro-sanity';
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sanityOptions from './environment';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sanity(sanityOptions)]
});
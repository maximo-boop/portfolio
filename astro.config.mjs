import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelServerless from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelServerless(),
  integrations: [tailwind()],
  framework: {
    react: {
      enabled: true
    }
  }
});
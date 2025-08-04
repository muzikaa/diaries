// @ts-expect-error
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  output: "server",

  // site: 'https://muzikaa.github.io/',
  // server: { port: parseInt(process.env.PORT) || 4321, host: true },
  base: "diaries",

  adapter: vercel(),
});
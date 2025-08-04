// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import auth from "auth-astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  output: "server",
  base: "diaries",
  site: 'https://muzikaa.github.io/',
  server: { port: parseInt(process.env.PORT) || 4321, host: true },
  adapter: node({
    mode: "standalone"
  })
});
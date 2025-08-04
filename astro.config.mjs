// @ts-expect-error
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  output: "server",
  base: "diaries",
  // site: 'https://muzikaa.github.io/',
  // server: { port: parseInt(process.env.PORT) || 4321, host: true },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      configPath: 'wrangler.jsonc',
    },
  }),
});
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// TODO: switch to "https://alicecantonweddings.com" once DNS cuts over from the WordPress site.
export default defineConfig({
  site: "https://alice-canton-weddings.efrain-villanueva3.workers.dev",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
});

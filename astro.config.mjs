// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Google Sans Code",
      cssVariable: "--font-google-sans-code",
      weights: ["400", "700"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
    }]
  },

  integrations: [icon()],
});
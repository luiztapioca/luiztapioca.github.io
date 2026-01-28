// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import expressiveCode from 'astro-expressive-code';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: []
  },

  integrations: [expressiveCode({
    themes: ['catppuccin-latte', 'catppuccin-macchiato'],
    styleOverrides: {
      codeFontFamily: 'var(--font-mono)',
    }
  }), icon(), react()],

  site: "https://luiztapioca.github.io",
});
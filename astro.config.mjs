// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// import icon from "astro-icon";
import expressiveCode from 'astro-expressive-code';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  // experimental: {
  //   fonts: [{
  //     provider: fontProviders.google(),
  //     name: "JetBrains Mono",
  //     cssVariable: "--font-jetbrains",
  //     weights: [300, 400, 500, 600, 700],
  //     styles: ["normal"],
  //   }]
  // },

  integrations: [expressiveCode({
    themes: ['solarized-light', 'solarized-dark'],
    useDarkModeMediaQuery: false,
    themeCssSelector: (theme) => {
      if (theme.name === 'solarized-dark') {
        return '.dark'
      }
      return ':root:not(.dark)'
    },
    styleOverrides: {
      // codeFontFamily: 'Maple Mono NF CN',
      borderRadius: '0',
      frames: {
        shadowColor: 'transparent',
      },
    }
  }), svelte()],

  site: "https://rosadehiroshima.github.io",
});

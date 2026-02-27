// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import expressiveCode from 'astro-expressive-code';

import react from '@astrojs/react';

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
      codeFontFamily: 'Monaco',
      borderRadius: '0',
      frames: {
        shadowColor: 'transparent',
      },
    }
  }), icon(), react()],

  site: "https://luiztapioca.github.io",
});

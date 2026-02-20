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

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Playpen Sans",
      cssVariable: "--font-playpen-sans",
      weights: [400, 500, 600, 700],
      styles: ["normal"],
    }, {
      provider: fontProviders.google(),
      name: "Fira Sans",
      cssVariable: "--font-fira-sans",
      weights: [300, 400, 500, 600, 700],
      styles: ["normal", "italic"],
    }, {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-fira-mono",
      weights: [400, 500, 700],
      styles: ["normal"],
    }]
  },

  integrations: [expressiveCode({
    themes: ['catppuccin-latte', 'catppuccin-macchiato'],
    // catppuccin-latte (light) is first, rose-pine (dark) is second
    useDarkModeMediaQuery: false,
    themeCssSelector: (theme) => {
      // rose-pine is dark theme, catppuccin-latte is light theme
      if (theme.name === 'catppuccin-macchiato') {
        return '.dark'
      }
      return ':root:not(.dark)'
    },
    styleOverrides: {
      codeFontFamily: 'var(--font-mono)',
      borderRadius: '0',
      frames: {
        shadowColor: 'transparent',
      },
    }
  }), icon(), react()],

  site: "https://luiztapioca.github.io",
});
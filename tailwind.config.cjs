const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'primary': '#FF7F50',
        'back': '#000000',
        'charcoal': '#2c2c2c',
        'bisque': '#ede4d3',
        'taupe': '#c4bcab',
        'terracotta': '#dd6236'
      },
    },
  },
};

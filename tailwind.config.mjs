/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        maluma: "url('/maluma.webp')",
        emilia: "url('/emilia.webp')",
        carlosvives: "url('/carlosvives.webp')",
        wisin: "url('/wisin.webp')",
        priceroyce: "url('/priceroyce.webp')",
      },
      flexGrow: {
        4: "4",
      },
    },
  },
  plugins: [],
};

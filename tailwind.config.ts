import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0B3C5D",
          teal: "#2D9CDB",
          green: "#2F9E44",
          light: "#F7F7F7",
          dark: "#222222"
        }
      }
    }
  },
  plugins: []
};

export default config;

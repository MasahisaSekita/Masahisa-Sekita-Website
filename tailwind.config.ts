import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "Newsreader",
          "Superior Title",
          "Cormorant Garamond",
          "Playfair Display",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif",
        ],
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Pitch Sans"',
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      colors: {
        paper: {
          50: "#FCFBF8",
          100: "#F9F7F2",
          200: "#F3EFE7",
          300: "#E7E2D6",
          400: "#D3CCBE",
          500: "#A39B8B",
          600: "#746C5E",
          700: "#4D463B",
          800: "#2B261F",
          900: "#181512",
          950: "#0F0D0B",
        },
        stone: {
          850: "#211E1C",
          900: "#1C1917",
          950: "#0C0A09",
        },
      },
    },
  },
  plugins: [],
};

export default config;

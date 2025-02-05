import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', 
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff', 
          dark: '#000000', 
        },
        secondary: {
          light: '#dadada', 
          dark: '#a1a1aa', 
        },
        background: {
          light: '#FFFFFF',
          dark: '#000000',
        },
        text: {
          light: '#ffffff',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

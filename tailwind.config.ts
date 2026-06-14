import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        blush: "#F9EEE7",
        cream: "#FDF8F5",
        mauve: "#C9A99A",
        "warm-black": "#1C1613",
        gold: "#B8935A",
        "gold-light": "#D4AF7A",
        muted: "#8A7A74",
      },
    },
  },
  plugins: [],
};

export default config;

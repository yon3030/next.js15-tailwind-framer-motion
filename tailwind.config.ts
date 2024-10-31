import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      // obviously: ["Obviously Variable", "sans-serif"],
      bubbleLove: ["Bubble Love Demo", "sans-serif"],
      dinoko: ["Dinoko-Regular", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;

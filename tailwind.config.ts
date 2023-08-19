import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#19191B",
        light: "#FFFCFA",
        gray: "#E2E0DF",
        red: "#C3315D",
        blue: "#32B8CB",
        pink: "#ED7DC0",
        orange: "#FF7A42",
        green: "#00B79F",
        violet: "#7A60B3",
      },
    },
  },
  plugins: [],
};
export default config;

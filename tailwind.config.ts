import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/ui/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#121213",
      gray: {
        100: "#F3F6F880",
        200: "#D9D9D9",
        300: "#1C1D1E",
      },
      blue: "#6398FF",
      white: "#F3F6F8",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

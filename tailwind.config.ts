import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/ui/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#121213",
      gray: {
        100: "#F3F6F8",
        200: "#D9D9D9",
      },
      white: "#F3F6F8",
      blue: "#6398FF",
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

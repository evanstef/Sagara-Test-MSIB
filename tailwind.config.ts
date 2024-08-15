import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "navbar" : "#212121",
        "primary" : "#A51535",
        "border" : "#353535",
        "konten"  : "#9E9E9E",
        "footer" : "#1C1C1C",
        "border-menu" : "#D0D5DD",
        "text-menu" : "#344054"
      },
    },
  },
  plugins: [],
};
export default config;

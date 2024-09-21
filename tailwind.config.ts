import type { Config } from "tailwindcss";
const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

const config: Config = {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["mdi-light"]),
    }),
  ],
};
export default config;

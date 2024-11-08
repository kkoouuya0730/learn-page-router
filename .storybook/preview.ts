import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const backgrounds = {
  default: "Amber50",
  values: [
    { name: "Amber50", value: "#FFFBEB", default: true },
    { name: "Whitesmoke", value: "whitesmoke" },
    { name: "Black", value: "black" },
    { name: "Red", value: "#EF9A9A" },
    { name: "Pink", value: "#F48FB1" },
    { name: "Purple", value: "#CE93D8" },
    { name: "Deep Purple", value: "#B39DDB" },
    { name: "Indigo", value: "#9FA8DA" },
    { name: "Blue", value: "#90CAF9" },
    { name: "Light Blue", value: "#81D4FA" },
    { name: "Dark Blue", value: "#5CB1EC" },
    { name: "Green", value: "#A5D6A7" },
    { name: "Deep Orange", value: "#FFAB91" },
    { name: "Blue Grey", value: "#B0BEC5" },
  ],
};

const preview: Preview = {
  parameters: {
    backgrounds,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

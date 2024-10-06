import type { Meta, StoryObj } from "@storybook/react";
import Radio from ".";

const meta = {
  title: "elements/button/Radio",
  parameters: {
    layout: "centered",
  },
  component: Radio,
} satisfies Meta<typeof Radio>;

export default meta;

type ButtonProps = StoryObj<typeof meta>;

export const Primary: ButtonProps = {
  args: {
    label: "サイズを選択してください",
    radioValue: [
      {
        id: "fdfafda",
        name: "size",
        value: "250g",
        label: "250g",
      },
      {
        id: "tergfb",
        name: "size",
        value: "500g",
        label: "500g",
      },
      {
        id: "hytrhth",
        name: "size",
        value: "1kg",
        label: "1kg",
      },
    ],
  },
};

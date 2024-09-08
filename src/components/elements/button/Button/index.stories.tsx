import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Text/Button",
  parameters: {
    layout: "centered",
  },
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type ButtonProps = StoryObj<typeof meta>;

export const Primary: ButtonProps = {
  args: {
    color: "primary",
    children: <>Add to Cart</>,
    onClick: () => alert("click!!"),
  },
};

export const Secondary: ButtonProps = {
  args: {
    color: "secondary",
    children: <>View Details</>,
    onClick: () => alert("click!!"),
  },
};

export const Tertiary: ButtonProps = {
  args: {
    color: "tertiary",
    children: <>Learn More</>,
    onClick: () => alert("click!!"),
  },
};

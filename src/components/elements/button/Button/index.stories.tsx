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

export const All: ButtonProps = {
  args: { color: "primary" },
  render: () => (
    <div className="flex gap-4">
      <Button disabled={true} color="primary">
        Add to Cart
      </Button>
      <Button disabled={true} color="secondary">
        Add to Cart
      </Button>
      <Button disabled={true} color="tertiary">
        Add to Cart
      </Button>
    </div>
  ),
};

export const Primary: ButtonProps = {
  args: {
    color: "primary",
    children: "Add to Cart",
    disabled: false,
    onClick: () => alert("click!!"),
  },
};

export const Secondary: ButtonProps = {
  args: {
    color: "secondary",
    children: "View Detail",
    disabled: false,
    onClick: () => alert("click!!"),
  },
};

export const Tertiary: ButtonProps = {
  args: {
    color: "tertiary",
    children: "Learn More",
    disabled: false,
    onClick: () => alert("click!!"),
  },
};

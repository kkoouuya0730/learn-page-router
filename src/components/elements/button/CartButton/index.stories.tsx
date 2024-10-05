import type { Meta, StoryObj } from "@storybook/react";
import CartButton from ".";

const meta = {
  title: "elements/button/CartButton",
  parameters: {
    layout: "centered",
  },
  component: CartButton,
} satisfies Meta<typeof CartButton>;

export default meta;

type ButtonProps = StoryObj<typeof meta>;

export const All: ButtonProps = {
  args: { color: "primary" },
  render: () => (
    <div className="flex gap-4">
      <CartButton disabled={true} color="primary">
        Add to Cart
      </CartButton>
      <CartButton disabled={true} color="secondary">
        Add to Cart
      </CartButton>
      <CartButton disabled={true} color="tertiary">
        Add to Cart
      </CartButton>
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

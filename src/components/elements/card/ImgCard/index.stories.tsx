import type { Meta, StoryObj } from "@storybook/react";
import { ImgCard } from ".";
import Button from "../../button/Button";

const meta = {
  title: "Text/ImgCard",
  parameters: {
    layout: "centered",
  },
  component: ImgCard,
} satisfies Meta<typeof ImgCard>;

export default meta;

type ImgCardProps = StoryObj<typeof meta>;

export const Default: ImgCardProps = {
  args: {
    src: "/images/coffee/coffee-2608864_1280.jpg",
    ledes: "Espresso Blend",
    price: 12.99,
    children: (
      <p>
        <Button color="primary" className="w-full">
          Add to Cart
        </Button>
      </p>
    ),
  },
};

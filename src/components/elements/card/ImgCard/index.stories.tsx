import type { Meta, StoryObj } from "@storybook/react";
import { ImgCard } from ".";

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
  },
};

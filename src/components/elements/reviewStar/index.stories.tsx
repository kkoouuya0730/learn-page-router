import type { Meta, StoryObj } from "@storybook/react";
import ReviewScore from ".";

const meta = {
  title: "elements/reviewScore",
  parameters: {
    layout: "centered",
  },
  component: ReviewScore,
} satisfies Meta<typeof ReviewScore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    score: 1,
  },
};

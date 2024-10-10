import type { Meta, StoryObj } from "@storybook/react";
import Star from ".";

const meta = {
  title: "elements/reviewScore/Star",
  component: Star,
} satisfies Meta<typeof Star>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

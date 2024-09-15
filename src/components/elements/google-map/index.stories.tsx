import type { Meta, StoryObj } from "@storybook/react";
import GoogleMap from ".";

const meta = {
  title: "GoogleMap",
  component: GoogleMap,
} satisfies Meta<typeof GoogleMap>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

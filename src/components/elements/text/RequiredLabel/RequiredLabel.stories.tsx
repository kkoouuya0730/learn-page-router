import type { Meta, StoryObj } from "@storybook/react";
import RequiredLabel from ".";

const meta = {
  title: "Text/RequiredLabel",
  component: RequiredLabel,
} satisfies Meta<typeof RequiredLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

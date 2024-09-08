import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from ".";

const meta = {
  title: "Text/LoginForm",
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

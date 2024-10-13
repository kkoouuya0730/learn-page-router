import type { Meta, StoryObj } from "@storybook/react";
import AuthForm, { loginFormTypeValue } from ".";

const meta = {
  title: "Features/login/AuthForm",
  component: AuthForm,
} satisfies Meta<typeof AuthForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    formType: {
      control: "inline-radio",
      options: loginFormTypeValue,
    },
  },
  args: {
    formType: "login",
  },
};

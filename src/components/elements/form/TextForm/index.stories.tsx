import type { Meta, StoryObj } from "@storybook/react";
import { TextForm } from ".";

const meta = {
  title: "elements/form/TextForm",
  parameters: {
    layout: "centered",
  },
  component: TextForm,
} satisfies Meta<typeof TextForm>;

export default meta;

type TextFormProps = StoryObj<typeof meta>;

export const Primary: TextFormProps = {
  argTypes: {
    iconType: {
      control: "select",
      options: ["none", "email", "password", "search"],
    },
  },
  args: {
    label: "Email",
    isRequired: true,
    onClickClearButton: () => alert("Clear Input Value"),
    iconType: "none",
  },
};

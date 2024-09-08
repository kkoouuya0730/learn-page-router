import type { Meta, StoryObj } from "@storybook/react";
import TextCard from ".";

const meta = {
  title: "Text/TextCard",
  parameters: {
    layout: "centered",
  },
  component: TextCard,
} satisfies Meta<typeof TextCard>;

export default meta;

type TextCardProps = StoryObj<typeof meta>;

export const Default: TextCardProps = {
  args: {
    children: (
      <>
        <p>text</p>
      </>
    ),
  },
};

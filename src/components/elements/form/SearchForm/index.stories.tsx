import type { Meta, StoryObj } from "@storybook/react";
import SearchForm from ".";

const meta = {
  title: "Text/SearchForm",
  parameters: {
    layout: "centered",
  },
  component: SearchForm,
} satisfies Meta<typeof SearchForm>;

export default meta;

type SearchFormProps = StoryObj<typeof meta>;

export const Primary: SearchFormProps = {
  args: {
   
  },
};


import type { Meta, StoryObj } from "@storybook/react";
import CustomHeading from ".";

const meta = {
  title: "elements/text/CustomHeading",
  component: CustomHeading,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CustomHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ALL: Story = {
  args: { tag: "h1", children: <></> },
  render: () => (
    <div>
      <CustomHeading tag="h1">Locations</CustomHeading>
      <CustomHeading tag="h2">Locations</CustomHeading>
      <CustomHeading tag="h3">Locations</CustomHeading>
    </div>
  ),
};

export const H1: Story = {
  args: { tag: "h1", children: "Our Products" },
};
export const H2: Story = {
  args: { tag: "h2", children: "Locations" },
};
export const H3: Story = {
  args: { tag: "h3", children: "This Month Picks" },
};

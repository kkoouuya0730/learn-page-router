import type { Meta, StoryObj } from "@storybook/react";
import StoreCard from ".";

const meta = {
  title: "Card/StoreCard",
  component: StoreCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof StoreCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    storeInfo: {
      storeName: "Downtown Cafe",
      address: "123 Main St, City Center",
      phoneNumber: "123-456-7890",
      businessHours: {
        open: "10:00",
        close: "23:00",
      },
    },
  },
};

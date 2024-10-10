import type { Meta, StoryObj } from "@storybook/react";
import {
  StoreDetailDialog,
  StoreDetailDialogProps,
} from ".";

const meta = {
  title: "Features/store/StoreDetailDialog",
  parameters: {
    layout: "centered",
  },
  component: StoreDetailDialog,
} satisfies Meta<typeof StoreDetailDialog>;

export default meta;

type StoreDetailDialog = StoryObj<typeof meta>;

const Example = (props: StoreDetailDialogProps) => {
  return <StoreDetailDialog {...props} />;
};

export const Primary: StoreDetailDialog = {
  args: {
    storeInfo: {
      id: "",
      storeName: "Downtown Cafe",
      description:
        "Our flagship store in the heart of downtown. Enjoy artisanal coffee in a cozy atmosphere.",
      address: "123 Main St, City Center",
      phoneNumber: "123-456-7890",
      businessHours: {
        open: "10:00",
        close: "23:00",
      },
    },
    onClose: () => alert("Close Modal!"),
    isOpen: false,
  },
};

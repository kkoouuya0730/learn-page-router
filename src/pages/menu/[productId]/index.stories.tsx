import type { Meta, StoryObj } from "@storybook/react";
import MenuDetail from ".";
import { Roasting } from "@prisma/client";

const meta = {
  title: "Page/MenuDetail",
  component: MenuDetail,
} satisfies Meta<typeof MenuDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    menuDetail: {
      id: "",
      name: "Ethiopia Yirgacheffe Natural",
      price: 18,
      imgSrc: "https://picsum.photos/320/320",
      subImages: [
        "https://picsum.photos/100/100",
        "https://picsum.photos/100/100",
        "https://picsum.photos/100/100",
      ],
      description:
        "This specialty coffee from Ethiopia has a fruity aroma and sweet flavor. You will enjoy its rich flavor reminiscent of blueberries and strawberries, and its smooth taste.",
      review: {
        id: "",
        score: 3,
        title: "good",
        content: "good",
      },
      roasting: Roasting.CINNAMON,
      country: "Ethiopia",
      manufacturing: "Natural",
      flavor: ["Blueberry", "Strawberry", "Dark Chocolate"],
    },
  },
};

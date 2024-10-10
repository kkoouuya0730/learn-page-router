import type { Meta, StoryObj } from "@storybook/react";
import { BlogListItem } from ".";
const meta = {
  title: "Features/blog/BlogListItem",
  parameters: {
    layout: "centered",
  },
  component: BlogListItem,
} satisfies Meta<typeof BlogListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    blog: {
      id: "df8f2df6-4a83-4ec5-9cbb-3196e350e832",
      title:
        "インデックスとは何？MySQL(InnoDB)とPostgreSQLのインデックスの違いとは？調べてみました",
      thumbnail: "/images/cold-brew-exploration.jpg",
      author: {
        name: {
          firstName: "Michael",
          lastName: "Johnson",
        },
        username: "coldbrew_mike",
        gender: "man",
        age: "30",
        description:
          "Cold brew specialist and coffee blogger.",
        email: "michael.johnson@example.com",
        password: "coldbrewCoffee1",
        registered: "2020-11-20",
        phone: "345-678-9012",
        thumbnail: "/images/authors/michael-johnson.jpg",
        github: "https://github.com/michaeljohnson",
        twitter: "https://twitter.com/mikecoldbrew",
        instagram: "https://instagram.com/michaeljohnson",
      },
      tag: ["Cold Brew", "Summer", "Coffee"],
      likes: 145,
      contents:
        "Tips and tricks for making the best cold brew coffee.",
    },
  },
};

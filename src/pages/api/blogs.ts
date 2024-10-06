import type { NextApiRequest, NextApiResponse } from "next";

import { Blog } from "@/types/blog";

type ResponseData = {
  blogs: Blog[];
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const blogs: Blog[] = [
    {
      id: "df8f2df6-4a83-4ec5-9cbb-3196e350e832",
      title: "Mastering the Pour-Over",
      thumbnail: "/images/coffee-pour-over.jpg",
      author: {
        name: {
          firstName: "John",
          lastName: "Doe",
        },
        username: "johndoe_coffee",
        gender: "man",
        age: "35",
        description:
          "Coffee enthusiast and brewing expert.",
        email: "john.doe@example.com",
        password: "securePassword123",
        registered: "2022-01-15",
        phone: "123-456-7890",
        thumbnail: "/images/authors/john-doe.jpg",
        github: "https://github.com/johndoe",
        twitter: "https://twitter.com/johndoe",
        instagram: "https://instagram.com/johndoe",
      },
      tag: ["Brewing", "Pour-Over", "Coffee"],
      likes: 220,
      contents:
        "Step-by-step guide to perfecting your pour-over coffee.",
    },
    {
      id: "7a7096b7-12e0-4e0b-8b84-2b097b0d45c6",
      title: "The Best Espresso Machines",
      thumbnail: "/images/espresso-machine.jpg",
      author: {
        name: {
          firstName: "Jane",
          lastName: "Smith",
        },
        username: "espresso_jane",
        gender: "woman",
        age: "28",
        description: "Barista and espresso aficionado.",
        email: "jane.smith@example.com",

        password: "passwordEspresso!",
        registered: "2021-06-10",
        phone: "234-567-8901",
        thumbnail: "/images/authors/jane-smith.jpg",
        github: "https://github.com/janesmith",
        twitter: "https://twitter.com/janesmith",
        instagram: "https://instagram.com/jane_espresso",
      },
      tag: ["Espresso", "Gear", "Coffee"],
      likes: 180,
      contents:
        "A detailed review of the top espresso machines for home brewing.",
    },
    {
      id: "e4e8b7e2-5e01-4d3f-91f0-38d37d2e8a4f",
      title: "Exploring Cold Brew",
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
  ];
  res.status(200).json({ blogs });
}

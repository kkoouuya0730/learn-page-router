import { PrismaClient } from "@prisma/client";
import {
  Gender,
  Roasting,
  Manufacturing,
} from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const users = [
    {
      password: "securePassword123!",
      username: "johndoe",
      gender: Gender.MAN,
      age: "30",
      description:
        "Web developer passionate about creating user-friendly applications.",
      email: "johndoe@example.com",
      Blog: undefined,
      phone: "+1234567890",
      thumbnail: "https://example.com/images/johndoe.jpg",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  ];
  let userInfo;
  for (let user of users) {
    userInfo = await prisma.user.create({ data: user });
  }

  const reviews = [
    {
      score: 1,
      title: "Init Review Title",
      content: "Init Review Contents",
      
    },
  ];

  let reviewInfo;
  for (let review of reviews) {
    reviewInfo = await prisma.review.create({
      data: review,
    });
  }

  const menus = [
    {
      name: "Ethiopian Yirgacheffe",
      price: 1200,
      imgSrc: "https://picsum.photos/300/200",
      subImages: [],
      description:
        "A light-bodied coffee with bright acidity, floral notes, and a clean finish.",
      country: "Ethiopia",

      manufacturing: Manufacturing.WASHED,
      roasting: Roasting.LIGHT,
      flavor: ["Floral", "Citrus", "Bergamot", "Jasmine"],
    },
  ];
  for (let menu of menus) {
    await prisma.menu.create({ data: menu });
  }

  const blogs = [
    {
      title: "10 Essential Tips for Mastering JavaScript",
      thumbnail:
        "https://example.com/images/javascript-tips-thumbnail.jpg",
      author: undefined,
      authorId: userInfo?.id,
      tag: [],
      likes: 256,
      contents: "",
    },
  ];
  for (let blog of blogs) {
    await prisma.blog.create({ data: blog });
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

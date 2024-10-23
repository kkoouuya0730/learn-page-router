import { PrismaClient } from "@prisma/client";
import { Gender, Roasting, Manufacturing } from "@prisma/client";
import { hash } from "bcrypt";
const prisma = new PrismaClient();

async function seed() {
  const user1 = await prisma.user.create({
    data: {
      username: "johndoe",
      gender: Gender.MAN,
      age: "30",
      description: "I am a software developer",
      email: "john@example.com",
      password: await hash("password123", 10),
      phone: "1234567890",
      thumbnail: "https://example.com/john.jpg",
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  });

  await prisma.blog.create({
    data: {
      title: "My First Blog Post",
      thumbnail: "https://example.com/blog1.jpg",
      author: {
        connect: { id: user1.id },
      },
      tag: ["technology", "programming"],
      likes: 10,
      contents: "This is my first blog post about technology and programming.",
    },
  });

  const review1 = await prisma.review.create({
    data: {
      score: 4,
      title: "Great coffee experience",
      content: "This coffee has a rich flavor and smooth finish. Highly recommended!",
    },
  });

  await prisma.menu.create({
    data: {
      name: "Ethiopian Yirgacheffe",
      price: 1200,
      imgSrc: "https://example.com/ethiopian-yirgacheffe.jpg",
      subImages: ["https://example.com/ethiopian-yirgacheffe-1.jpg", "https://example.com/ethiopian-yirgacheffe-2.jpg"],
      description: "A light-bodied coffee with bright acidity, floral notes, and a clean finish.",
      country: "Ethiopia",
      review: {
        connect: { id: review1.id },
      },
      roasting: Roasting.LIGHT,
      manufacturing: Manufacturing.WASHED,
      flavor: ["Floral", "Citrus", "Bergamot"],
    },
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

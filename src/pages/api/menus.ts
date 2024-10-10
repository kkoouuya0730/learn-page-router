import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const menus = await prisma.menu.findMany();
      console.log(menus);
      res.status(200).json(menus);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "Failed to fetch menus" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

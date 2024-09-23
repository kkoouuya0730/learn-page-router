import type { NextApiRequest, NextApiResponse } from "next";

import { Menu } from "@/types/menu";

type ResponseData = {
  menus: Menu[];
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const menus = [
    {
      name: "Classic Coffee",
      price: 450,
      imgSrc: "https://picsum.photos/300/200",
      description:
        "A smooth and rich blend of coffee made with the finest beans, perfect for any time of the day.",
    },
    {
      name: "Vanilla Latte",
      price: 520,
      imgSrc: "https://picsum.photos/300/200",
      description:
        "A creamy latte with a hint of vanilla, creating the perfect balance of sweetness and coffee flavor.",
    },
    {
      name: "Mocha Frappuccino",
      price: 580,
      imgSrc: "https://picsum.photos/300/200",
      description:
        "A cold and refreshing mocha blended with ice and topped with whipped cream and chocolate drizzle.",
    },
    {
      name: "Hazelnut Cappuccino",
      price: 500,
      imgSrc: "https://picsum.photos/300/200",
      description:
        "A rich and foamy cappuccino infused with the nutty flavor of hazelnuts for a delightful treat.",
    },
    {
      name: "Iced Americano",
      price: 400,
      imgSrc: "https://picsum.photos/300/200",
      description:
        "A bold and refreshing iced coffee, perfect for a hot day and those who prefer their coffee without milk.",
    },
  ];
  res.status(200).json({ menus });
}

import TextCard from "@/components/elements/card/TextCard";
import React from "react";

export default function TextCardList() {
  // サーバーから取得したい サーバーまだないけど
  const menuItems = [
    {
      head: "Vanilla Cold Brew",
      description:
        "Smooth cold brew coffee infused with vanilla and served over ice, perfect for a refreshing summer pick-me-up.",
    },
    {
      head: "Mango Coconut Latte",
      description:
        "A tropical blend of espresso, mango puree, and creamy coconut milk, topped with a hint of whipped cream.",
    },
    {
      head: "Caramel Macchiato Bliss",
      description:
        "Rich espresso layered with vanilla syrup and caramel sauce, finished with steamed milk and a caramel drizzle.",
    },
    {
      head: "Berry Hibiscus Refresher",
      description:
        "A fruity blend of hibiscus tea, mixed berries, and a splash of lemonade, served chilled for a vibrant, refreshing taste.",
    },
  ];
  return (
    <>
      <ul className="flex space-x-1">
        {menuItems.map((menu) => (
          <li key={menu.head}>
            <TextCard>
              <h3 className="text-2xl font-semibold">
                {menu.head}
              </h3>
              <p className="leading-snug text-red-600">
                {menu.description}
              </p>
            </TextCard>
          </li>
        ))}
      </ul>
    </>
  );
}

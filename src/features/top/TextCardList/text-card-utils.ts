export type MenuItems = {
  head: string;
  description: string;
};

const menuItems: MenuItems[] = [
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

export function getCardListItems(): Promise<MenuItems[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menuItems);
    }, 5000);
  });
}

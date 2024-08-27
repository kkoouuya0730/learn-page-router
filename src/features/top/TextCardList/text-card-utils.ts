export type MenuItem = {
  head: string;
  description: string;
  icon?: string;
};

const menuItems: MenuItem[] = [
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

const coffeeMenus = [
  {
    head: "Caramel Macchiato",
    description: "$4.50",
    icon: "timer-icon",
  },
  {
    head: "Vanilla Cold Brew",
    description: "$3.80",
    icon: "timer-icon",
  },
  {
    head: "Hazelnut Cappuccino",
    description: "$4.20",
    icon: "timer-icon",
  },
  {
    head: "Chocolate Mocha",
    description: "$4.90",
    icon: "timer-icon",
  },
];

export function getCardListItems(): Promise<MenuItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(menuItems);
    }, 5000);
  });
}

export function getCoffeeItems(): Promise<MenuItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(coffeeMenus);
    }, 5000);
  });
}

export function isArrayOfCard(items: []) {
  return items.every((item) => "head" in item);
}

import React from "react";

type NavigationItem = {
  href: string;
  title: string;
};

const navigationList: NavigationItem[] = [
  {
    href: "/menu",
    title: "Menu",
  },
  {
    href: "/rewards",
    title: "Rewards",
  },
  {
    href: "/gift",
    title: "Send a Gift",
  },
  {
    href: "/store",
    title: "Find a Store",
  },
];

export default function NavigationParts() {
  return (
    <>
      <ul className="flex items-center justify-center space-x-8">
        {navigationList.map((nav) => (
          <li key={nav.title}>
            <a href={nav.href} className="text-black hover:text-gray-500">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

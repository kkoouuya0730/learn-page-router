import TextCard from "@/components/elements/card/TextCard";
import React, { useEffect, useState } from "react";
import {
  getCardListItems,
  MenuItems,
} from "./text-card-utils";

export default function TextCardList() {
  const [menus, setMenus] = useState<MenuItems[] | null>(
    null
  );

  useEffect(() => {
    getCardListItems().then((res) => setMenus(res));
  }, []);

  return (
    <>
      {menus && (
        <ul className="flex space-x-1">
          {menus.map((menu) => (
            <li key={menu.head}>
              <TextCard>
                <h3 className="text-2xl font-semibold">
                  {menu.head}
                </h3>
                <p className="leading-snug text-yellow-800">
                  {menu.description}
                </p>
              </TextCard>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

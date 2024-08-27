import React, { useEffect, useState } from "react";
import {
  getImgCardListItems,
  ImgItem,
} from "./img-card-utils";
import { ImgCard } from "@/components/elements/card/ImgCard";

export default function ImgCardList() {
  const [menus, setMenus] = useState<ImgItem[] | null>(
    null
  );

  useEffect(() => {
    getImgCardListItems().then((res) => setMenus(res));
  }, []);

  return (
    <>
      {menus && (
        <ul className="flex space-x-1">
          {menus.map((menu) => (
            <li key={menu.src}>
              <ImgCard
                src={menu.src}
                className="rounded-lg"
              ></ImgCard>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

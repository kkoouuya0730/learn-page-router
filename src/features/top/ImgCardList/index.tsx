import React from "react";
import { ImgItem } from "./img-card-utils";
import { ImgCard } from "@/components/elements/card/ImgCard";

type Props = {
  items: ImgItem[];
};
export default function ImgCardList({ items }: Props) {
  return (
    <>
      {items && (
        <ul className="flex space-x-1">
          {items.map((item) => (
            <li key={item.src}>
              <ImgCard
                src={item.src}
                className="rounded-lg"
              ></ImgCard>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

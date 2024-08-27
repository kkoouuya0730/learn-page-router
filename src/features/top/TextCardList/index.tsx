import TextCard from "@/components/elements/card/TextCard";
import React, { useEffect, useState } from "react";
import {
  getCardListItems,
  MenuItem,
} from "./text-card-utils";
import { ImgItem } from "../ImgCardList/img-card-utils";
import { ClockIcon } from "@/ui/icon/ClockIcon";

type Props = {
  items: MenuItem[]
}

export default function TextCardList({items}: Props) {
  return (
    <>
      {items && (
        <ul className="flex space-x-1">
          {items.map((item) => (
            <li key={item.head}>
              <TextCard>
                {item.icon && <ClockIcon />}
                <h3 className="text-2xl font-semibold">
                  {item.head}
                </h3>
                <p className="leading-snug text-yellow-800">
                  {item.description}
                </p>
              </TextCard>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

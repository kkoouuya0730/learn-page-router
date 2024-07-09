import React from "react";
import Link from "next/link";
import ImgCard from "../card/imgCard";
import type { Category } from "@/types/category";
import type { AllMenuItems } from "@/types/all_menu_items";

type Props<T> = {
  title: string;
  listItems: T[];
};

const ListTemplate: React.FC<
  Props<Category | AllMenuItems>
> = ({ title, listItems }) => {
  return (
    <div className="flex-col space-y-5">
      <h1 className="font-black text-2xl">{title}</h1>
      <div className="flex">
        {listItems.map((item) => {
          return (
            <div className="mx-2 p-3" key={item.id}>
              <Link href={item.id}>
                <ImgCard item={item} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListTemplate;

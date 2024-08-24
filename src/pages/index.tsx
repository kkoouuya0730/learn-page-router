import type { NextPage } from "next";

import ListTemplate from "@/components/template/ListTemplate";
import HeroImage from "@/components/HeroImage";

import category from "@/utils/dummyJson/category.json";
import allMenuItems from "@/utils/dummyJson/all_menu_items.json";

export default function Home() {
  return (
    <>
      <div className="flex-col space-y-5">
        <div>
          <HeroImage />
        </div>
      </div>
    </>
  );
}

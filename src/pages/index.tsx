import type { NextPage } from "next";

import ListTemplate from "@/components/template/ListTemplate";
import HeroImage from "@/components/HeroImage";

import category from "@/utils/dummyJson/category.json";
import allMenuItems from "@/utils/dummyJson/all_menu_items.json";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex-col space-y-5">
        <div>
          <HeroImage />
        </div>
        <ListTemplate
          title="Featured menu items"
          listItems={category}
        />
        <ListTemplate
          title="All menu items"
          listItems={allMenuItems}
        />
      </div>
    </>
  );
};

export default Home;

import Button from "@/components/elements/button/Button";
import Layout from "@/components/layouts/Layout";
import ImgCardList from "@/features/top/ImgCardList";
import TextCardList from "@/features/top/TextCardList";
import {
  getCardListItems,
  getCoffeeItems,
  MenuItem,
} from "@/features/top/TextCardList/text-card-utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Top() {
  const router = useRouter();
  const [menus, setMenus] = useState<MenuItem[] | null>(
    null
  );
  const [coffeeMenus, setCoffeeMenus] = useState<
    MenuItem[] | null
  >(null);

  useEffect(() => {
    // TODO どの画面、コンポーネントでデータ取得するのがいいか一般論を調査
    getCardListItems().then((res) => setMenus(res));
  }, []);

  useEffect(() => {
    // TODO どの画面、コンポーネントでデータ取得するのがいいか一般論を調査
    getCoffeeItems().then((res) => setCoffeeMenus(res));
  }, []);

  return (
    <>
      <div className="flex-col space-y-5 sm:space-y-10">
        <section>
          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                alt="image"
                src="/images/hero-icon.jpg"
                width={1200}
                height={1000}
                className="rounded-2xl"
              />
              <div className="absolute left-4 top-1/3 text-white leading-relaxed">
                <h1 className="font-bold text-3xl sm:text-6xl mb-2">
                  Discover our cafe
                </h1>
                <div className="hidden sm:block">
                  <p>
                    We are a community-based coffee shop
                    located in the heart of North Beach. San
                    Francisco.
                  </p>
                  <p className="mb-2">
                    Our space is designed to be place of
                    comfort, creativity, and connection.
                  </p>
                </div>
                <p>
                  <Button
                    color="primary"
                    onClick={() => router.push("/menu")}
                  >
                    View our menus
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex-col space-y-3">
            <h2 className="font-bold text-3xl">
              Summer menu
            </h2>
            <p className="w-full sm:w-1/2">
              Cool off this summer with our exclusive
              seasonal coffee menu! Refreshing flavors you
              cannot miss—available for a limited time only!
            </p>
            <Button
              color="primary"
              onClick={() => router.push("/rewards")}
            >
              Order now
            </Button>
            {menus && <TextCardList items={menus} />}
            <ImgCardList />
          </div>
        </section>
        <section>
          <div className="flex-col space-y-3">
            <h2 className="font-bold text-3xl">
              Featured menu items
            </h2>
            <p>Our top picks for you</p>
            {coffeeMenus && (
              <TextCardList items={coffeeMenus} />
            )}
          </div>
        </section>
      </div>
    </>
  );
}

Top.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

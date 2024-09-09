import Button from "@/components/elements/button/Button";
import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";
import ImgCardList from "@/features/top/ImgCardList";
import { ImgItem } from "@/features/top/ImgCardList/img-card-utils";
import TextCardList from "@/features/top/TextCardList";
import {
  getCardListItems,
  getCoffeeItems,
  MenuItem,
} from "@/features/top/TextCardList/text-card-utils";
import Image from "next/image";
import { useRouter } from "next/router";

const imgItems: ImgItem[] = [
  {
    src: "/images/coffee/coffee-2608864_1280.jpg",
  },
  {
    src: "/images/coffee/coffee-7121939_1280.jpg",
  },
  {
    src: "/images/coffee/table-4566563_1280.jpg",
  },
  {
    src: "/images/coffee/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg",
  },
];

type Props = {
  menus: MenuItem[];
  coffeeMenus: MenuItem[];
};
export default function Top({ menus, coffeeMenus }: Props) {
  const router = useRouter();

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
                <CustomHeading
                  tag="h1"
                  className="sm:text-6xl mb-2"
                >
                  Discover our cafe
                </CustomHeading>
                <div className="hidden lg:block">
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
            <h2 className="font-bold text-3xl text-amber-900">
              Summer menu
            </h2>
            <p className="w-full lg:w-1/2">
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
            <ImgCardList items={imgItems} />
          </div>
        </section>
        <section>
          <div className="flex-col space-y-3">
            <h2 className="font-bold text-3xl text-amber-900">
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

export async function getStaticProps() {
  const menus = await getCardListItems();
  const coffeeMenus = await getCoffeeItems();

  return {
    props: {
      menus,
      coffeeMenus,
    },
  };
}

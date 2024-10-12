import { useRouter } from "next/router";
import Image from "next/image";

import Button from "@/components/elements/button/Button";
import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";

import { Menu } from "@/types/menu";
import { ImgCard } from "@/components/elements/card/ImgCard";

type Props = {
  menus: Menu[];
};
export default function Home({ menus }: Props) {
  const router = useRouter();

  const itemList = menus.map((menu) => {
    return {
      src: menu.imgSrc,
      ledes: menu.name,
      price: menu.price,
    };
  });

  return (
    <div className="grid gap-4">
      <div className="relative">
        <Image
          alt="image"
          src="https://picsum.photos/1500/1000"
          width={1500}
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
              We are a community-based coffee shop located
              in the heart of North Beach. San Francisco.
              <span className="block">
                Our space is designed to be place of
                comfort, creativity, and connection.
              </span>
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
      <div className="grid gap-4">
        <CustomHeading tag="h2">Summer menu</CustomHeading>
        <p className="w-full lg:w-1/2">
          Cool off this summer with our exclusive seasonal
          coffee menu! Refreshing flavors you cannot
          miss—available for a limited time only!
        </p>
        <p>
          <Button
            color="primary"
            onClick={() => router.push("/rewards")}
          >
            Order now
          </Button>
        </p>
      </div>
      <div className="grid gap-4">
        <CustomHeading tag="h2">
          Featured menu items
        </CustomHeading>
        <p>Our top picks for you</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {itemList.map((item) => (
            <ImgCard
              key={item.ledes}
              src={item.src}
              ledes={item.ledes}
              price={item.price}
              width={300}
              height={200}
            >
              <Button color="primary">Add to Cart</Button>
            </ImgCard>
          ))}
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "http://localhost:3000/api/menus"
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const menus = await res.json();
    return { props: { menus } };
  } catch (error) {
    console.error("Fetch error:", error);
    return { props: { menus: null } };
  }
}

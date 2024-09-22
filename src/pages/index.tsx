import { useRouter } from "next/router";
import Image from "next/image";

import Button from "@/components/elements/button/Button";
import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";

import { Menu } from "@/types/menu";

type Props = {
  data: {
    menus: Menu[];
  };
};
export default function Home({ data }: Props) {
  const router = useRouter();

  const itemList = data.menus;

  return (
    <div className="grid gap-4">
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
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.error("Fetch error:", error);
    return { props: { data: null } };
  }
}

import Button from "@/components/elements/button/Button";
import { ImgCard } from "@/components/elements/card/ImgCard";
import { TextForm } from "@/components/elements/form/TextForm";
import CustomHeading from "@/components/elements/text/CustomHeading";
import Layout from "@/components/layouts/Layout";

export default function Menu() {
  const list = [
    {
      ledes: "Espresso Blend",
      price: 12.993,
    },
    {
      ledes: "Espresso Blend",
      price: 12.99,
    },
    {
      ledes: "Espresso Blend",
      price: 12.99,
    },
    {
      ledes: "Espresso Blend",
      price: 12.99,
    },
    {
      ledes: "Espresso Blend",
      price: 12.99,
    },
    {
      ledes: "Espresso Blend",
      price: 12.99,
    },
    {
      ledes: "Espresso Blend",
      price: 12.99,
    },
    {
      ledes: "Espresso Blend",
      price: 12.99,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <CustomHeading tag="h1">Our Products</CustomHeading>
        <TextForm
          iconType="search"
          onClickClearButton={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
      <div className="grid justify-center items-center sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {list.map((l) => (
          <ImgCard
            src="https://picsum.photos/400/200"
            ledes={l.ledes}
            price={l.price}
            className="w-full"
            key={l.ledes}
          >
            <p className="mx-auto">
              <Button color="primary" className="w-full">
                Add to Cart
              </Button>
            </p>
          </ImgCard>
        ))}
      </div>
    </>
  );
}

Menu.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

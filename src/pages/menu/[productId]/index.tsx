import Button from "@/components/elements/button/Button";
import CartButton from "@/components/elements/button/CartButton";
import CustomRadio from "@/components/elements/button/Radio";
import ReviewScore from "@/components/elements/reviewStar";
import CustomHeading from "@/components/elements/text/CustomHeading";
import { Menu } from "@/types/menu";
import { CartIcon } from "@/ui/icon/CartIcon";
import { HeartIcon } from "@/ui/icon/HeartIcon";
import Image from "next/image";

type Props = {
  menuDetail: Menu;
};
export default function MenuDetail({ menuDetail }: Props) {
  const {
    name,
    price,
    imgSrc,
    subImages,
    description,
    review,
    detail,
    flavor,
  } = menuDetail;
  const radioValue = [
    {
      id: "fdfafda",
      name: "size",
      value: "250g",
      label: "250g",
    },
    {
      id: "tergfb",
      name: "size",
      value: "500g",
      label: "500g",
    },
    {
      id: "hytrhth",
      name: "size",
      value: "1kg",
      label: "1kg",
    },
  ];
  return (
    <div className="grid gap-4">
      <p className="p-4 bg-white rounded-lg shadow-lg">
        <Image
          src={imgSrc}
          width={320}
          height={320}
          alt=""
          className="rounded-lg"
        />
      </p>
      <p className="grid grid-cols-3 gap-4">
        {subImages?.map((img) => (
          <Image
            src={img}
            width={100}
            height={100}
            alt=""
            className="rounded-lg"
            key={img}
          />
        ))}
      </p>
      <CustomHeading tag="h1">{name}</CustomHeading>
      <p>
        <ReviewScore score={review.score} />
      </p>
      <p>
        <b className="text-lg text-amber-900">${price}</b>
      </p>
      <p className="text-amber-700">{description}</p>
      <p>
        <CustomRadio
          radioValue={radioValue}
          label="Select Size"
          isColum
        />
      </p>
      <p className="flex space-x-2">
        <CartButton color="primary" className="flex-1">
          Add to Cart
        </CartButton>
        <Button color="secondary" className="px-4">
          <HeartIcon />
        </Button>
      </p>
      <div className="bg-white rounded-lg shadow-lg p-6 text-amber-700 grid gap-2">
        <CustomHeading tag="h2">Item Detail</CustomHeading>
        <p>Roasting：{detail.roasting}</p>
        <p>Country：{detail.country}</p>
        <p>Manufacturing：{detail.manufacturing}</p>
        <CustomHeading tag="h3" className="text-amber-900">
          Flavor Notes
        </CustomHeading>
        <ul className="list-disc">
          {flavor.map((item) => (
            <li className="ml-4" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

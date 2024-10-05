import { Review } from "./review";

export type Menu = {
  name: string;
  price: number;
  imgSrc: string;
  subImages?: string[];
  description: string;
  review: Review;
  detail: {
    roasting: Roasting;
    country: string;
    manufacturing: Manufacturing;
  };
  flavor: string[];
};

type Roasting =
  | "Light"
  | "Cinnamon"
  | "Medium"
  | "High"
  | "City"
  | "Fullcity"
  | "French"
  | "Italian";

type Manufacturing =
  | "Washed"
  | "Natural"
  | "SemiWashed"
  | "Unknown";

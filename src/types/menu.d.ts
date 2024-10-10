import { Review } from "./review";

export type Menu = {
  id: string;
  name: string;
  price: number;
  imgSrc: string;
  subImages?: string[];
  description: string;
  review: Review;
  roasting: Roasting;
  country: string;
  manufacturing: Manufacturing;
  flavor: string[];
};

const roastingValue = [
  "LIGHT",
  "CINNAMON",
  "MEDIUM",
  "HIGH",
  "CITY",
  "FULLCITY",
  "FRENCH",
  "ITALIAN",
] as const;

type Roasting = (typeof roastingValue)[number];

const manufacturingValue = [
  "WASHED",
  "NATURAL",
  "SEMIWASHED",
  "UNKNOWN",
];
type Manufacturing = (typeof manufacturingValue)[number];

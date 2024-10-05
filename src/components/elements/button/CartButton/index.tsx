import { CartIcon } from "@/ui/icon/CartIcon";
import clsx from "clsx";

const colorProperties = [
  "primary",
  "secondary",
  "tertiary",
] as const satisfies readonly string[];

type ColorProperties = (typeof colorProperties)[number];

type ButtonProps = {
  color: ColorProperties;
} & React.ComponentPropsWithoutRef<"button">;

const colorMapping: Record<
  ColorProperties,
  { basic: string; disabled: string }
> = {
  primary: {
    basic: "bg-amber-400 hover:bg-amber-500 text-amber-900",
    disabled: "bg-amber-200 text-amber-500",
  },
  secondary: {
    basic: "bg-amber-100 hover:bg-amber-200 text-amber-800",
    disabled: "bg-amber-50 text-amber-300",
  },
  tertiary: {
    basic:
      "text-amber-600 hover:text-amber-800 hover:underline",
    disabled: "text-amber-300",
  },
};

export default function CartButton({
  color,
  type = "button",
  ...props
}: ButtonProps) {
  const style = colorMapping[color];
  return (
    <button
      {...props}
      type={type}
      className={clsx([
        "font-semibold p-2 rounded-xl inline-flex items-center justify-center",
        props.className,
        props.disabled ? style.disabled : style.basic,
      ])}
    >
      <CartIcon className="mr-2" />
      {props.children}
    </button>
  );
}

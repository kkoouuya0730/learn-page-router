import clsx from "clsx";
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
} from "react";

const colorProperties = [
  "primary",
  "secondary",
  "tertiary",
] as const satisfies readonly string[];

type ColorProperties = (typeof colorProperties)[number];

type ButtonProps = {
  // iconとか使う場合、childrenの方がいいかもという思想
  children: ReactNode;
  color: ColorProperties;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const colorMapping: Record<
  ColorProperties,
  { color: string }
> = {
  primary: {
    color: "bg-amber-400 hover:bg-amber-500",
  },
  secondary: {
    color: "bg-teal-500 hover:bg-teal-600",
  },
  tertiary: {
    color: "border hover:bg-gray-100",
  },
};

export default function Button({
  children,
  color,
  onClick,
  type = "button",
}: ButtonProps) {
  const style = colorMapping[color];
  return (
    <>
      <button
        type={type}
        className={clsx([
          `font-semibold
           p-2
           rounded-xl
           hover:shadow-sm
          `,
          style.color,
        ])}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

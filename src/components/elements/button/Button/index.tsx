import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

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
  className?: string | string[];
};

const colorMapping: Record<
  ColorProperties,
  { color: string }
> = {
  primary: {
    color: "bg-amber-400 hover:bg-amber-500 text-amber-900",
  },
  secondary: {
    color: "bg-amber-100 hover:bg-amber-200 text-amber-800",
  },
  tertiary: {
    color:
      "text-amber-600 hover:text-amber-800 hover:underline",
  },
};

export default function Button({
  children,
  color,
  onClick,
  type = "button",
  className,
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
          `,
          style.color,
          className,
        ])}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

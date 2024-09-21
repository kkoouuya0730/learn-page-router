import clsx from "clsx";
import React from "react";

// h1~h6を受け取って対応するheadingを返したい
type Props = {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & React.ComponentPropsWithoutRef<"h1">;

const headingStyleMapping: {
  [key in Props["tag"]]: string;
} = {
  h1: "text-amber-900 font-bold text-3xl",
  h2: "text-amber-800 font-semibold text-2xl",
  h3: "text-amber-700 font-medium text-xl",
  h4: "",
  h5: "",
  h6: "",
};
export default function CustomHeading({
  tag,
  className,
  children,
  ...props
}: Props) {
  const Tag = tag;
  const tagStyle = headingStyleMapping[tag];
  return (
    <Tag className={clsx([className, tagStyle])} {...props}>
      {children}
    </Tag>
  );
}

import clsx from "clsx";

import React, { ReactNode } from "react";
import Image from "next/image";

import CustomHeading from "../../text/CustomHeading";

type Props = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  ledes: string;
  price?: number;
  className?: string;
  children: ReactNode;
};

export function ImgCard({
  src,
  width = 200,
  height = 200,
  alt = "",
  ledes,
  price,
  className,
  children,
}: Props) {
  return (
    <div className="rounded-md bg-white p-4 grid gap-4 w-fit shadow-md mx-auto">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={clsx([className, "rounded-lg"])}
      />
      <CustomHeading tag="h3">{ledes}</CustomHeading>
      {typeof price !== "undefined" && (
        <p className="font-bold text-amber-600">${price}</p>
      )}
      {children}
    </div>
  );
}

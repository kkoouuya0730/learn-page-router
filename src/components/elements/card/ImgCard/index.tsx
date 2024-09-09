import React, { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";
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
  width = 300,
  height = 300,
  alt = "",
  ledes,
  price,
  className,
  children,
}: Props) {
  return (
    <>
      <div className="rounded-md bg-white p-4 flex-col space-y-3">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={clsx([className, "rounded-lg"])}
        />
        <CustomHeading tag="h3">{ledes}</CustomHeading>
        {typeof price !== "undefined" && (
          <p className="font-bold text-amber-600">
            ${price}
          </p>
        )}
        {children}
      </div>
    </>
  );
}

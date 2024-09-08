import React, { ReactNode } from "react";
import Image from "next/image";
import clsx from "clsx";

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
        <h3 className="text-2xl font-semibol text-amber-900">
          {ledes}
        </h3>
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

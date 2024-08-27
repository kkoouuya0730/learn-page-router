import React from "react";
import Image from "next/image";

type Props = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
};

export function ImgCard({
  src,
  width = 300,
  height = 300,
  alt = "",
  className,
  children,
}: Props) {
  return (
    <>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
      {children}
    </>
  );
}

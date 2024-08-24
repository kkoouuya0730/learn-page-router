import React from "react";
import Image from "next/image";

export default function Hamburger() {
  return (
    <>
      <Image
        src="/images/menu.png"
        width={25}
        height={25}
        alt="menu"
        className="sm:hidden"
      />
    </>
  );
}

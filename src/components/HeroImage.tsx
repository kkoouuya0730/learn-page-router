import Image from "next/image";

import SimpleButton from "./button/simpleButton";

// 画面の大きさをいじると画像が小さくなってから大きくなるのはなぜ
export default function HeroImage() {
  return (
    <>
      <Image
        alt="Picture of Coffee"
        src="/images/hero-icon.jpg"
        // wとhは固定なの？
        width={700}
        height={700}
        className="rounded-lg"
      />
    </>
  );
}

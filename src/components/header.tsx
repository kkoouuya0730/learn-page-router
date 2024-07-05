import Link from "next/link";
import Image from "next/image";

import SimpleButton from "./button/simpleButton";

export default function Header() {
  return (
    <header className="border-b-2 border-gray-200">
      <div
        className="
        flex
        p-4
        space-x-5
        justify-between
        "
      >
        <div className="flex items-center space-x-3">
          <Image
            src="/favicon.ico"
            width={30}
            height={30}
            alt="test"
            className="rounded-lg"
          />
          <h1 className="font-black text-2xl">
            Vesuvio Cafe
          </h1>
          <div>
            <input placeholder="Search" />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <SimpleButton
            color="primary"
            label="Sign up"
            onClick={() => console.log("click!")}
          />
          <SimpleButton
            color="secondary"
            label="Cart"
            onClick={() => console.log("cart click!")}
          />
          <Image
            src="/favicon.ico"
            width={30}
            height={30}
            alt="test"
            className="rounded-lg"
          />
        </div>
      </div>
    </header>
  );
}

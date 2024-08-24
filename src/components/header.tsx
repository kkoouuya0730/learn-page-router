import Image from "next/image";
import SimpleButton from "./button/simpleButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-2 border-gray-200">
      <div
        className="
        flex
        py-2
        px-4
        space-x-5
        justify-between
        "
      >
        <div className="flex items-center space-x-1">
          <Image
            src="/images/menu.png"
            width={25}
            height={25}
            alt="menu"
            className="sm:hidden"
          />
          <Link href="/">
            <Image
              src="/images/header-logo.png"
              width={140}
              height={20}
              alt="cafe 7pm"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          <SimpleButton
            color="primary"
            label="Sign up"
            onClick={() => console.log("click!")}
          />
          <SimpleButton
            color="secondary"
            label="Login"
            onClick={() => console.log("cart click!")}
          />
        </div>
      </div>
    </header>
  );
}

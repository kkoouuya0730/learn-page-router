import Button from "@/components/elements/button/Button";
import Image from "next/image";
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
              alt="cafe 7pm - Home"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            color="primary"
            onClick={() => console.log("click!")}
          >
            Sign Up
          </Button>
          <Button
            color="tertiary"
            onClick={() => console.log("cart click!")}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

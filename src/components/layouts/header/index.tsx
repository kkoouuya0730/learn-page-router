import Button from "@/components/elements/button/Button";
import Image from "next/image";
import Link from "next/link";
import NavigationParts from "./parts/Navigation";
import Hamburger from "./parts/Hamburger";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const handleSignUp = () => {
    router.push("/signup");
  };
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <header className="border-b-2 border-gray-200 bg-amber-400">
      <div
        className="
        flex
        py-2
        px-4
        space-x-5
        justify-between
        items-center
        "
      >
        <div className="flex items-center space-x-1">
          <Hamburger />
          <Link href="/">
            <Image
              src="/images/header-logo.png"
              width={140}
              height={20}
              alt="cafe 7pm - Home"
              className="rounded-md"
            />
          </Link>
        </div>
        <div className="hidden sm:block">
          <NavigationParts />
        </div>
        <div className="flex items-center space-x-1">
          <Button color="primary" onClick={handleSignUp}>
            <p className="whitespace-nowrap">Sign Up</p>
          </Button>
          <Button color="tertiary" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

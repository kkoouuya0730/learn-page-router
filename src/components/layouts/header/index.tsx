import Button from "@/components/elements/button/Button";
import Image from "next/image";
import Link from "next/link";
import NavigationParts from "./parts/Navigation";
import Hamburger from "./parts/Hamburger";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/component";
import { AccountIcon } from "@/ui/icon/AccountIcon";

const supabase = createClient();
export default function Header() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();
  const handleSignUp = () => {
    router.push("/signup");
  };
  const handleLogin = () => {
    router.push("/login");
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, [session]);

  return (
    <header className="border-b-2 border-gray-200 bg-amber-400">
      <div className="flex py-2 px-4 space-x-5 justify-between items-center">
        <div className="flex items-center space-x-1">
          <Hamburger />
          <Link href="/">
            <Image src="/images/header-logo.png" width={140} height={20} alt="cafe 7pm - Home" className="rounded-md" />
          </Link>
        </div>
        <div className="hidden sm:block">
          <NavigationParts />
        </div>

        {session ? (
          <div>
            <Link href="/mypage" className="hover:text-gray-500">
              <AccountIcon className="text-center" />
            </Link>
          </div>
        ) : (
          <div className="flex items-center space-x-1">
            <Button color="primary" onClick={handleSignUp}>
              <span className="whitespace-nowrap">Sign Up</span>
            </Button>
            <Button color="tertiary" onClick={handleLogin}>
              Login
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

import { getAuthSession } from "@/lib/auth";

import Image from "next/image";
import Link from "next/link";

import AsideBar from "@/components/AsideBar";
import UserAvatar from "@/components/UserAvatar";
import SignInButton from "@/components/SignInButton";

const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="flex justify-between items-center py-4 px-6">
      <Link className="flex items-center" href={"/"}>
        <Image
          src="/logo.png"
          alt="EmailAdminer Logo"
          width={150}
          height={150}
          priority
        />
      </Link>
      {!session?.user ? (
        <SignInButton />
      ) : (
        <AsideBar>
          {session?.user && <UserAvatar user={session.user} />}
        </AsideBar>
      )}
    </header>
  );
};

export default Header;

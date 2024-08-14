import { getAuthSession } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import AsideBar from "@/components/AsideBar";
import UserAvatar from "@/components/UserAvatar";
import SignInButton from "@/components/SignInButton";

const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="bg-black text-white flex flex-col sm:flex-row justify-between items-center py-4 px-6 border-b">
      <Link className="flex items-center mb-4 sm:mb-0" href="/">
        <Image
          src="/logo.png"
          alt="EmailAdminer Logo"
          width={150}
          height={100}
          priority
          className="object-contain invert"
        />
      </Link>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
        <nav className="mb-4 sm:mb-0">
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {!session?.user ? (
          <div className="flex items-center max-w-fit">
            <SignInButton text="Sign In" />
          </div>
        ) : (
          <AsideBar>
            {session.user && <UserAvatar user={session.user} />}
          </AsideBar>
        )}
      </div>
    </header>
  );
};

export default Header;

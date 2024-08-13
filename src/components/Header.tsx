import Image from "next/image";
import SignInButton from "@/components/SignInButton";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="EmailAdminer Logo"
              width={150}
              height={150}
              priority
            />
          </div>
          <SignInButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;

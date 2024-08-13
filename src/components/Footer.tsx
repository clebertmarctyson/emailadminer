import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link className="mb-4 md:mb-0" href={"/"}>
            <Image
              src="/logo.png"
              alt="EmailAdminer Logo"
              width={150}
              height={150}
              priority
              className="invert"
            />
          </Link>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link href="/privacy" className="hover:text-blue-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-300">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-blue-300">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} EmailAdminer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTwitter } from "react-icons/fa";

import logoImage from "../../public/logo.png";

const Header: NextComponentType = () => {
  const imageSideLength: number = 64;

  return (
    <div className="flex items-center justify-between h-16 px-4 py-6 text-4xl font-bold bg-white shadow-md md:text-4xl md:px-12">
      <div className="cursor-pointer">
        <Link href="/" passHref>
          <div className="flex items-center">
            <Image
              src={logoImage}
              alt="Proken logo"
              width={imageSideLength}
              height={imageSideLength}
            />
          </div>
        </Link>
      </div>
      <div className="flex justify-around w-36">
        <a
          href="https://github.com/kyutech-programming-club"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/kyutech_proken"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Header;

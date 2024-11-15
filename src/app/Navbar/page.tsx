import React from "react";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import { FaTelegram, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: 'https://x.com/SulaanaDao', icon: <FaTwitter />, ariaLabel: 'Twitter' },
  { href: 'https://t.me/SulaanaDao', icon: <FaTelegram />, ariaLabel: 'Telegram' },
];

const Page: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between w-[98%] md:w-[70%] lg:w-[60%] mx-auto py-2">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <Image
          src={Logo}
          alt="sulaana logo"
          width={0}
          className="w-10 md:w-12 lg:w-14 cursor-pointer"
        />
        <p className="text-xl md:text-2xl font-extrabold text-center md:text-left cursor-pointer">
          SULAANA
        </p>
      </div>

      {/* Social Links Section */}
      <div className="flex justify-center items-center space-x-6 md:space-x-8 -mt-4 md:-mt-0">
        {socialLinks.map((link) => (
          <a
            key={link.ariaLabel}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.ariaLabel}
            className="text-3xl md:text-4xl text-[#4D2AA7] hover:text-[#8D32B6] transition-all duration-300 transform hover:scale-110"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Page;

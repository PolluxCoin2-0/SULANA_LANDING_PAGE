import React from "react";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";
import { FaTelegram, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: ' https://x.com/SulaanaDao', icon: <FaTwitter />, ariaLabel: 'Twitter' },
  { href: ' https://t.me/SulaanaDao', icon: <FaTelegram />, ariaLabel: 'Telegram' },
];

const Page: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between mx-auto w-[60%]">
      <div className="flex flex-row items-center space-x-6">
        <div className="flex flex-row items-center space-x-2">
        <Image
          src={Logo}
          alt="sulana logo"
          width={0}
          className="w-[12%] cursor-pointer"
        />
        <p className="text-2xl font-extrabold cursor-pointer">SULAANA</p>
        </div>
      </div>
      <div className="flex justify-center items-center md:justify-start space-x-8 mt-6 md:mt-0">
          {socialLinks.map((link) => (
            <a
              key={link.ariaLabel}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="text-4xl text-[#4D2AA7] hover:text-[#8D32B6] transition-all duration-300 transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
    </div>
  );
};

export default Page;

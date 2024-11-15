import React from "react";
import Logo from "../../../public/Logo.svg";
import Image from "next/image";

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
      <div className="flex justify-center">
          <a
            href="#"
            className="text-white font-semibold bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] px-8 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          >
            SULMINE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;

import React from "react";
import { FaShieldAlt, FaUsers, FaGlobe } from "react-icons/fa";

const Page: React.FC = () => {
  return (
    <div className="space-y-8 py-12 px-4 bg-gradient-to-b from-white to-gray-100 rounded-2xl">
      {/* Main Heading */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6]">
          Grow with us.
        </h1>
        <p className="text-gray-600 font-medium text-xl">
          Lens is part of Avara, one of the largest on-chain global distribution networks.
        </p>
      </div>

      {/* Stats Section */}
      <div className="flex flex-row items-center justify-around pt-12 space-x-4">
        {/* Secured Onchain */}
        <div className="flex flex-col items-center space-y-4 w-1/3 text-center transform transition-all hover:scale-105">
          <div className="p-4 rounded-full bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] shadow-lg flex items-center justify-center text-white">
            <FaShieldAlt className="text-4xl" />
          </div>
          <p className="text-[#4D2AA7] font-semibold text-3xl">25B+</p>
          <p className="text-gray-500 font-medium">Secured Onchain</p>
        </div>

        {/* Cumulative Users */}
        <div className="flex flex-col items-center space-y-4 w-1/3 text-center transform transition-all hover:scale-105">
          <div className="p-4 rounded-full bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] shadow-lg flex items-center justify-center text-white">
            <FaUsers className="text-4xl" />
          </div>
          <p className="text-[#4D2AA7] font-semibold text-3xl">3,000,000+</p>
          <p className="text-gray-500 font-medium">Cumulative Users</p>
        </div>

        {/* Distribution Network */}
        <div className="flex flex-col items-center space-y-4 w-1/3 text-center transform transition-all hover:scale-105">
          <div className="p-4 rounded-full bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] shadow-lg flex items-center justify-center text-white">
            <FaGlobe className="text-4xl" />
          </div>
          <p className="text-[#4D2AA7] font-semibold text-3xl">Global</p>
          <p className="text-gray-500 font-medium">Distribution Network</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

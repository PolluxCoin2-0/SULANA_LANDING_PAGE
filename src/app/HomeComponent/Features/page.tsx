"use client";
import React from "react";
import { LuUserCircle2 } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { PiGraphFill } from "react-icons/pi";
import { GrCircleQuestion } from "react-icons/gr";
import { LuLayoutGrid } from "react-icons/lu";

const features = [
  {
    icon: <LuUserCircle2 size={36} />,
    title: "Accounts",
    description: "Smart Accounts—signless and gasless. One account for all apps.",
  },
  {
    icon: <MdAlternateEmail size={36} />,
    title: "Messaging",
    description: "A secure and private communication protocol.",
  },
  {
    icon: <SlGlobe size={36} />,
    title: "Global Reach",
    description: "Access a world of on-chain features without borders.",
  },
  {
    icon: <PiGraphFill size={36} />,
    title: "Analytics",
    description: "Track and analyze data to grow your reach.",
  },
  {
    icon: <LuLayoutGrid size={36} />,
    title: "Modular Toolkit",
    description: "Customizable modules for tailored user experiences.",
  },
  {
    icon: <GrCircleQuestion size={36} />,
    title: "Support",
    description: "Comprehensive support and resources for developers.",
  },
];

const Page: React.FC = () => {
  return (
    <div className="pb-16 border-b-[1px] border-dashed border-[#E5E5E6] ">
      {/* Header Section */}
      <p className="font-semibold text-3xl text-[#8E8F91] py-12 px-4 text-center max-w-4xl mx-auto">
        <span className="text-[#4D2AA7]">Onchain social features.</span> An intuitively designed, modular toolkit with maximum flexibility and built-in monetization opportunities.
      </p>

      {/* Diagonal Floating Feature Boxes */}
      <div className="relative flex flex-wrap justify-center gap-6 px-4 md:px-16 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-start p-6 bg-gradient-to-br from-[#f8f5ff] to-[#ece9ff] border border-dashed border-[#B6A6E9] rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform ${
              index % 2 === 0 ? "rotate-2" : "-rotate-2"
            } ${
              index % 3 === 0
                ? "translate-x-4"
                : index % 3 === 1
                ? "-translate-y-4"
                : "translate-y-4"
            }`}
          >
            {/* Icon */}
            <div className="text-[#4D2AA7] mb-3">{feature.icon}</div>
            
            {/* Title and Description */}
            <p className="font-semibold text-lg text-[#4D2AA7] mb-1">{feature.title}</p>
            <p className="text-[#707174] text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

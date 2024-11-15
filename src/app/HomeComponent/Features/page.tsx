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
    title: "Smart Profiles",
    description: "Secure, gasless accounts—one profile to access all knowledge features.",
  },
  {
    icon: <MdAlternateEmail size={36} />,
    title: "Community Messaging",
    description: "Encrypted and private communication within knowledge communities.",
  },
  {
    icon: <SlGlobe size={36} />,
    title: "Global Accessibility",
    description: "Connect and share information across borders on a unified platform.",
  },
  {
    icon: <PiGraphFill size={36} />,
    title: "Insights & Analytics",
    description: "Track, analyze, and optimize knowledge-sharing engagement.",
  },
  {
    icon: <LuLayoutGrid size={36} />,
    title: "Customizable Modules",
    description: "Tailored tools for a personalized knowledge experience.",
  },
  {
    icon: <GrCircleQuestion size={36} />,
    title: "Comprehensive Support",
    description: "Dedicated assistance and resources for community growth.",
  },
];

const Page: React.FC = () => {
  return (
    <div className="pb-16 border-b-[1px] border-dashed border-[#E5E5E6]">
      {/* Header Section */}
      <p className="font-semibold text-xl md:text-2xl text-[#8E8F91] py-8 md:py-12 px-4 text-center max-w-4xl mx-auto leading-relaxed">
        <span className="text-[#4D2AA7]">On-chain Knowledge Tools.</span> A seamless, modular ecosystem empowering users with enhanced interaction, security, and analytics for a knowledge-driven future.
      </p>

      {/* Feature Boxes */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-16 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-start p-4 md:p-6 bg-gradient-to-br from-[#f8f5ff] to-[#ece9ff] border border-dashed border-[#B6A6E9] rounded-lg shadow-lg transition-all duration-300 ${
              index % 2 === 0 ? "rotate-1" : "-rotate-1"
            } hover:scale-105 hover:shadow-xl ${
              index % 3 === 0
                ? "translate-x-2 md:translate-x-4"
                : index % 3 === 1
                ? "-translate-y-2 md:-translate-y-4"
                : "translate-y-2 md:translate-y-4"
            }`}
          >
            {/* Icon */}
            <div className="text-[#4D2AA7] mb-2 md:mb-3">{feature.icon}</div>
            
            {/* Title and Description */}
            <p className="font-semibold text-lg text-[#4D2AA7] mb-1">{feature.title}</p>
            <p className="text-[#707174] text-sm md:text-base leading-snug">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

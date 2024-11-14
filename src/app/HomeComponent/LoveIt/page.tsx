import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { LuLayoutGrid, LuUserCircle2 } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import { SlGlobe } from "react-icons/sl";

const features = [
  {
    icon: <LuUserCircle2 size={32} />,
    title: "Accounts.",
    description:
      "Smart Accounts—signless and gasless. One account for all apps.",
  },
  {
    icon: <MdAlternateEmail size={32} />,
    title: "Messaging.",
    description: "A secure and private communication protocol.",
  },
  {
    icon: <SlGlobe size={32} />,
    title: "Global Reach.",
    description: "Access a world of on-chain features without borders.",
  },
  {
    icon: <PiGraphFill size={32} />,
    title: "Analytics.",
    description: "Track and analyze data to grow your reach.",
  },
  {
    icon: <LuLayoutGrid size={32} />,
    title: "Modular Toolkit.",
    description: "Customizable modules for tailored user experiences.",
  },
  {
    icon: <GrCircleQuestion size={32} />,
    title: "Support.",
    description: "Comprehensive support and resources for developers.",
  },
];

const Page: React.FC = () => {
  return (
    <div className="py-12 border-b-[1px] border-dashed border-[#E5E5E6]">
      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] text-center">
        Your users will love it.
      </p>
      <p className="text-[#808183] text-xl font-medium text-center">
      It&apos;s never been easier to bring users onchain.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="mb-4 p-3 bg-[#E5E5E6] rounded-full">
              {feature.icon}
            </div>
            <p className="font-medium text-xl text-[#4D2AA7] mb-2">{feature.title}</p>
            <p className="text-[#919294] text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

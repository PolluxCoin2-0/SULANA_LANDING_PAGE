import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { LuLayoutGrid, LuUserCircle2 } from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { PiGraphFill } from "react-icons/pi";
import { SlGlobe } from "react-icons/sl";

const features = [
  {
    icon: <LuUserCircle2 size={32} />,
    title: "Accounts",
    description:
      "Secure and user-friendly Sulaana accounts, giving seamless access across all platform features.",
  },
  {
    icon: <MdAlternateEmail size={32} />,
    title: "Messaging",
    description: "Decentralized and private messaging for seamless collaboration within the Sulaana ecosystem.",
  },
  {
    icon: <SlGlobe size={32} />,
    title: "Global Knowledge Network.",
    description: "Connect and contribute to a global, borderless network of blockchain knowledge.",
  },
  {
    icon: <PiGraphFill size={32} />,
    title: "Analytics.",
    description: "Powerful tools to track engagement and gain insights on content reach and impact.",
  },
  {
    icon: <LuLayoutGrid size={32} />,
    title: "Modular Toolkit.",
    description: "Flexible and customizable modules to shape user experiences, tailored to diverse knowledge-sharing needs.",
  },
  {
    icon: <GrCircleQuestion size={32} />,
    title: "Support.",
    description: "Dedicated resources and guidance for contributors, researchers, and developers.",
  },
];

const Page: React.FC = () => {
  return (
    <div className="py-12 border-b-[1px] border-dashed border-[#E5E5E6]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] text-center py-1">
          Your community will thrive with Sulaana.
        </p>
        <p className="text-[#808183] text-xl font-medium w-[80%] sm:w-[90%] md:w-[75%] lg:w-[60%] text-center leading-relaxed">
          Empowering knowledge sharing in the blockchain space.
        </p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 pt-12">
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
  
import React from 'react';
import { FaClipboardList, FaCog, FaRocket } from 'react-icons/fa';

const Page: React.FC = () => {
  const roadmapData = [
    {
      quarter: 'Q1',
      title: 'Foundation & Research',
      description: 'Laying the groundwork with extensive research, ideation, and initial concept development.',
      icon: <FaClipboardList size={32} className="text-[#4D2AA7]" />,
    },
    {
      quarter: 'Q2',
      title: 'Development Phase',
      description: 'Start building core features, integrate essential functionalities, and conduct internal testing.',
      icon: <FaCog size={32} className="text-[#4D2AA7]" />,
    },
    {
      quarter: 'Q3',
      title: 'Launch & Expansion',
      description: 'Launch to the public, gather user feedback, and expand features based on user needs.',
      icon: <FaRocket size={32} className="text-[#4D2AA7]" />,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-12 py-12 bg-gradient-to-b from-indigo-50 to-purple-50 rounded-xl ">
      {/* Title */}
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] text-center mb-8">
        Our Journey Ahead
      </h2>

      {/* Roadmap Cards in a Row */}
      <div className="flex items-center justify-between w-full max-w-6xl space-x-8 relative pr-8">
        {/* Vertical Dashed Line */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="h-full w-[2px] border-dashed border-[#4D2AA7] border-opacity-50"></div>
        </div>

        {/* Roadmap Card */}
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white p-6 rounded-lg shadow-xl w-72 z-10 hover:shadow-2xl transition-all ${
              index === roadmapData.length - 1 ? 'mr-0' : 'mr-8'
            }`} // Add margin to right cards except the last one
          >
            {/* Quarter Tag */}
            <span className="absolute top-0 -mt-4 px-4 py-1 bg-[#4D2AA7] text-white text-sm font-semibold rounded-full shadow-lg">
              {item.quarter}
            </span>
            {/* Icon */}
            <div className="flex justify-center items-center mt-6">
              {item.icon}
            </div>
            {/* Content */}
            <h3 className="text-xl font-semibold text-[#4D2AA7] mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

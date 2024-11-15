import React from 'react';
import { FaClipboardList, FaCog, FaGlobe, FaLaptopCode, FaRocket } from 'react-icons/fa';

interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Page: React.FC = () => {
  const roadmapData: RoadmapItem[] = [
    {
      quarter: 'Q4 2024',
      title: 'Foundation & Launch',
      description: 'Laying the groundwork with extensive research, ideation, and initial concept development.',
      icon: <FaClipboardList size={32} className="text-[#4D2AA7]" />, // Icon for research/planning
    },
    {
      quarter: 'Q1 2025',
      title: 'Feature Expansion and User Growth',
      description: 'Start building core features, integrate essential functionalities, and conduct internal testing.',
      icon: <FaLaptopCode size={32} className="text-[#4D2AA7]" />, // Icon for development/coding
    },
    {
      quarter: 'Q2 2025',
      title: 'Ecosystem Development',
      description: 'Launch to the public, gather user feedback, and expand features based on user needs.',
      icon: <FaRocket size={32} className="text-[#4D2AA7]" />, // Icon for launching
    },
    {
      quarter: 'Q3 2025',
      title: 'Advanced AI & Content Verification',
      description: 'Integrate AI technologies and content validation tools to enhance user experience and security.',
      icon: <FaCog size={32} className="text-[#4D2AA7]" />, // Icon for AI/technology development
    },
    {
      quarter: 'Q4 2025',
      title: 'Global Expansion and Community Empowerment',
      description: 'Expand globally, build community, and empower users to contribute and shape the platform.',
      icon: <FaGlobe size={32} className="text-[#4D2AA7]" />, // Icon for global expansion
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center my-0 md:my-12 py-12 bg-gradient-to-b from-indigo-50 to-purple-50 rounded-xl ">
      {/* Title */}
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] text-center mb-4">
        Roadmap to Innovation
      </h2>
      <p className="mb-12 font-medium text-gray-600 text-center max-w-3xl">
        Sulaana is committed to evolving, with ongoing developments that enhance its knowledge-sharing capabilities.
      </p>

      {/* Roadmap Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-12">
        {roadmapData.slice(0,3).map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            {/* Quarter Tag */}
            <span className="absolute top-0 -mt-4 px-4 py-1 bg-[#4D2AA7] text-white text-sm font-semibold rounded-full shadow-lg">
              {item.quarter}
            </span>
            {/* Icon */}
            <div className="flex justify-center items-center mt-6">{item.icon}</div>
            {/* Content */}
            <h3 className="text-xl font-semibold text-[#4D2AA7] mt-4">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 space-y-6 md:space-y-0 md:space-x-8 mt-10 w-full">
        {roadmapData.slice(3).map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 w-[73%] md:w-[30%]"
          >
            {/* Quarter Tag */}
            <span className="absolute top-0 -mt-4 px-4 py-1 bg-[#4D2AA7] text-white text-sm font-semibold rounded-full shadow-lg">
              {item.quarter}
            </span>
            {/* Icon */}
            <div className="flex justify-center items-center mt-6">{item.icon}</div>
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

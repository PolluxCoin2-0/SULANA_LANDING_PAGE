import React from 'react';
import {
  FaBlog,
  FaAppStore,
  FaStore,
  FaNewspaper,
  FaUsers,
  FaPhotoVideo,
  FaGamepad,
  FaChalkboardTeacher,
  FaMoneyBillWave,
} from 'react-icons/fa';

const genres = [
  { name: 'Blogs', icon: <FaBlog /> },
  { name: 'Apps', icon: <FaAppStore /> },
  { name: 'Marketplaces', icon: <FaStore /> },
  { name: 'News', icon: <FaNewspaper /> },
  { name: 'Social', icon: <FaUsers /> },
  { name: 'Media', icon: <FaPhotoVideo /> },
  { name: 'Gaming', icon: <FaGamepad /> },
  { name: 'Education', icon: <FaChalkboardTeacher /> },
  { name: 'Finance', icon: <FaMoneyBillWave /> },
];

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-12 space-y-8 border-b-[1px] border-dashed border-[#E5E5E6]">
      {/* Header Text */}
      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] text-center leading-relaxed">
        Build for the whole internet.
      </p>

      <p className="text-[#808183] text-lg font-normal text-center max-w-2xl">
        Bring your ideas to life in a secure, fast, and reliable environment—create entirely new experiences or enhance existing products with plug-and-play features.
      </p>

      {/* Genre Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-8">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center w-full p-6 bg-gradient-to-br from-[#f8f2ff] to-[#f0eaff] text-[#4D2AA7] border border-dashed border-[#c4b6e5] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:rotate-1 hover:border-solid hover:border-[#8D32B6] hover:shadow-xl hover:bg-gradient-to-br from-[#ece4ff] to-[#e3d4ff]"
          >
            {/* Outer Glow Effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent to-[#8D32B6] opacity-10 blur-lg transition-all duration-500 group-hover:opacity-30"></div>
            {/* Icon and Text */}
            <div className="text-4xl mb-3 drop-shadow-md">{genre.icon}</div>
            <p className="text-lg font-semibold drop-shadow-sm">{genre.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

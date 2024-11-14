import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 rounded-lg bg-gradient-to-r from-purple-100 via-indigo-100 to-purple-100 shadow-xl space-y-6 mt-12">
      {/* Heading */}
      <p className="text-3xl font-semibold text-gray-800 text-center">
        Stay updated.
        <br />
        Join us on the journey to <span className="text-[#4D2AA7]">Lens</span>.
      </p>

      {/* Input and Button */}
      <div className="flex items-center w-full max-w-md space-x-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#4D2AA7] focus:ring-1 focus:ring-[#4D2AA7] transition"
        />
        <button className="flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] rounded-lg font-semibold hover:from-[#3A1E85] hover:to-[#5A2385] transition shadow-md hover:shadow-lg transform hover:scale-105 duration-200">
          <span>Notify me</span>
          <FaPaperPlane className="ml-2" />
        </button>
      </div>

      {/* Small Text */}
      <p className="text-gray-500 text-sm text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default Page;

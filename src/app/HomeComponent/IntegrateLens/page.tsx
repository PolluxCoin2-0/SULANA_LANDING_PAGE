import React from "react";

const Page: React.FC = () => {
  return (
    <div className="py-12 border-b-[1px] border-dashed border-[#E5E5E6]">
      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] text-center leading-relaxed">
        Integrate Lens.
      </p>
      <p className="font-medium text-2xl text-center text-[#8E8F91]">
        Resilient, future-proof infrastructure.
      </p>

      <div className="flex flex-col items-center space-y-8 w-full pt-12">
        {/* First Row */}
        <div className="flex flex-row items-center space-x-10 w-full">
          <div className="flex flex-row space-x-6 items-center justify-around bg-[#FBFBFB] py-12 px-6 rounded-xl w-1/2">
            <p>Logo</p>
            <p className="font-medium text-lg text-[#868789]">
              <span className="text-[#4D2AA7]">Faster.</span> Instant
              transaction settlement.
            </p>
          </div>

          <div className="flex flex-row space-x-6 items-center justify-around bg-[#FBFBFB] py-12 px-6 rounded-xl w-1/2">
            <p>Logo</p>
            <p className="font-medium text-lg text-[#868789]">
              <span className="text-[#4D2AA7]">Faster.</span> Instant
              transaction settlement.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-row items-center space-x-10 w-full">
          <div className="flex flex-row space-x-6 items-center justify-around bg-[#FBFBFB] py-12 px-6 rounded-xl w-1/2">
            <p>Logo</p>
            <p className="font-medium text-lg text-[#868789]">
              <span className="text-[#4D2AA7]">Faster.</span> Instant
              transaction settlement.
            </p>
          </div>

          <div className="flex flex-row space-x-6 items-center justify-around bg-[#FBFBFB] py-12 px-6 rounded-xl w-1/2">
            <p>Logo</p>
            <p className="font-medium text-lg text-[#868789]">
              <span className="text-[#4D2AA7]">Faster.</span> Instant
              transaction settlement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

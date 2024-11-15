import React from "react";
import { FaNetworkWired, FaCoins, FaUsers } from "react-icons/fa";
import { RiServerFill } from "react-icons/ri";

const Page: React.FC = () => {
  return (
    <div className="py-12 border-b-[1px] border-dashed border-[#E5E5E6] ">
      {/* Header Section */}
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] leading-relaxed">
          Secure, Efficient, Future-Proof
        </h1>
        <p className="font-medium text-xl md:text-2xl text-[#8E8F91] max-w-3xl mx-auto mt-4">
          With unmatched speed and affordability, Sulaana infrastructure ensures reliable performance, safeguarded by PolluxChain.
        </p>
      </div>

      {/* Feature Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 max-w-5xl mx-auto px-4">
        
        {/* Card 1 */}
        <div className="flex items-start p-6 bg-white shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105">
          <FaNetworkWired size={40} className="text-[#4D2AA7] mr-6" />
          <div>
            <h3 className="text-lg font-semibold text-[#4D2AA7]">
              Mainnet and Testnet Available
            </h3>
            <p className="text-[#868789] mt-2">
              Ready for deployment now—no pre-launch wait required.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start p-6 bg-white shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105">
          <FaCoins size={40} className="text-[#4D2AA7] mr-6" />
          <div>
            <h3 className="text-lg font-semibold text-[#4D2AA7]">
              Stable, Predictable Costs
            </h3>
            <p className="text-[#868789] mt-2">
              Consistent fees, no spikes.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start p-6 bg-white shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105">
          <FaUsers size={40} className="text-[#4D2AA7] mr-6" />
          <div>
            <h3 className="text-lg font-semibold text-[#4D2AA7]">
              Global Community Growth
            </h3>
            <p className="text-[#868789] mt-2">
              Contribute to a vibrant and rapidly expanding global knowledge-sharing ecosystem.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start p-6 bg-white shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105">
          <RiServerFill size={40} className="text-[#4D2AA7] mr-6" />
          <div>
            <h3 className="text-lg font-semibold text-[#4D2AA7]">
              Efficient, Scalable Infrastructure
            </h3>
            <p className="text-[#868789] mt-2">
              Built for seamless performance, even at large scales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

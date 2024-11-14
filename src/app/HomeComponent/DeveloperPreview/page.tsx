"use client";
import React, { useEffect, useState } from "react";
import HeroImg from "../../../../public/Logo.svg";
import Image from "next/image";

// AnimatedText component with scale and opacity transition
const AnimatedText = () => {
  const words = ["connections", "anything", "experiences", "memories", "ideas"];
  const colors = [
    "text-purple-500",
    "text-blue-500",
    "text-green-500",
    "text-orange-500",
    "text-pink-500",
  ];

  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [[words.length]]);

  useEffect(() => {
    setOpacity(0);
    setScale(0.8);

    const fadeIn = setTimeout(() => {
      setOpacity(1);
      setScale(1);
    }, 400);

    return () => clearTimeout(fadeIn);
  }, [index]);

  return (
    <p className="text-5xl font-bold text-center">
      Build{" "}
      <span
        className={`${colors[index]} transition-all duration-500 inline-block`}
        style={{
          transform: `scale(${scale})`,
          opacity: opacity,
        }}
      >
        {words[index]}
      </span>{" "}
      with SUL
    </p>
  );
};

// Page component with animated gradient background
const Page: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center space-y-4 pb-12 border-b-[1px] border-dashed border-[#E5E5E6] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-[length:200%_200%] animate-gradient-bg"></div>

      {/* Content */}
      <Image src={HeroImg} alt="Solana image" width={0} className="w-[15%] py-6" />
      <AnimatedText />
      <p className="text-[#8E8F91] text-lg font-medium">
        Lens is the resilient, low-cost Ethereum network with social features.
      </p>
      <div className="flex justify-center mt-8">
  <a
    href="#"
    className="text-white font-semibold bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] px-8 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-700
     hover:to-indigo-700 transition-all duration-300"
  >
    Get Started
  </a>
</div>

    </div>
  );
};

export default Page;

"use client";
import React, { useEffect, useState } from "react";
import HeroImg from "../../../../public/Logo.svg";
import Image from "next/image";

// AnimatedText component with scale and opacity transition
const AnimatedText = () => {
  const words = ["KNOWLEDGE", "INSIGHTS", "WISDOM", "INTELLIGENCE"];
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
  }, [words.length]);

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
    <h1 className="text-3xl md:text-5xl font-bold text-center">
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
    </h1>
  );
};

// Page component with animated gradient background
const Page: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center space-y-4 pb-12 border-b-[1px] border-dashed border-[#E5E5E6] overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-[length:200%_200%] animate-gradient-bg"></div>

      {/* Content */}
      <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8 md:space-y-10">
        <Image
          src={HeroImg}
          alt="Solana image"
          width={0}
          height={0}
          className="w-[25%] sm:w-[20%] md:w-[15%] lg:w-[10%]"
        />
        <AnimatedText />
        <h2 className="text-[#8E8F91] text-base sm:text-lg md:text-xl font-medium sm:w-[70%] md:w-[60%] lg:w-[80%] mx-auto">
          Sulaana is the AI-powered blockchain encyclopedia, bringing accurate, decentralized knowledge to life on the blockchain. Explore a world of information where every article is AI-enhanced, dynamic, and community-driven.
        </h2>
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="text-white font-semibold bg-gradient-to-r from-[#4D2AA7] to-[#8D32B6] px-8 py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;

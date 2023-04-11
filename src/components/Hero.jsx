import React from "react";
import HeroBack from "../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="max-h-[500px] flex flex-col justify-center absolute w-full h-full text-gray-200 bg-black/40">
          <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img className="w-full max-h-[500px] object-cover" src={HeroBack} alt="/" />
      </div>
    </div>
  );
};

export default Hero;

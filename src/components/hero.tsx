import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className=" text-gray-600 body-font">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg2.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="Hero Background"
          className="opacity-50 background-position-[ce]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 flex   h-screen">
        <div className="hero-left mt-[160px]">
          <h1 className="text-4xl font-bold text-white max-w-[550px] text-[50px] mb-[30px]">
            Welcome to the site of industrial devices
          </h1>
          <p className="mt-4 text-lg text-white text-[20px] max-w-[500px]">
            You can find the complete automation solutions and equipment you
            need here
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

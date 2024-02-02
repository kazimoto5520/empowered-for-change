import React from "react";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-y-4">
        {/* Heading */}
        <div>
          <h1 className="text-5xl text-mainColor font-bold">
            Girls and Women <br /> Empowerment
          </h1>
        </div>

        {/* Page Description */}
        <div className="text-textColor mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            sit rem <br /> voluptate perferendis impedit magni, quidem repellat,
            obcaecati <br /> unde tempore amet provident fuga repudiandae, eius
            ipsum.
          </p>
        </div>
        {/* Buttons - Discover more and Watch video */}
        <div className="flex items-center gap-x-8 mt-4">
          <Button className="bg-mainColor text-white rounded-xl hover:bg-textColor hover:duration-300">
            Discover more
          </Button>
          <div className="flex items-center gap-x-2">
            <div className="bg-mainColor rounded-full p-3 text-center hover:bg-textColor hover:duration-300 hover:cursor-pointer">
              <FaPlay size={16} className="text-white" />
            </div>
            <h1 className="text-textColor hover:cursor-pointer">Watch video</h1>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-mainColor w-[350px] h-[350px] rounded-3xl shadow-md opacity-70"></div>
        <Image
          src="/hero.png"
          width={1000}
          height={1000}
          alt="Hero"
          className="absolute top-0 right-0 object-fit"
        />
      </div>
    </div>
  );
};

export default HeroSection;

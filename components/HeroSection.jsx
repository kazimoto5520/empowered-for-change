import React from "react";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="max-sm:flx max-sm:flex-col max-sm:space-y-0 lg:flex justify-between items-center mx-32 max-sm:mx-4 max-lg:mx-8">
      <div className="flex flex-col gap-y-4 p-4">
        {/* Heading */}
        <div>
          <h1 className="text-5xl text-mainColor font-bold max-sm:text-4xl">
            Girls and Women <br className="max-sm:hidden inline-flex"/> Empowerment
          </h1>
        </div>

        {/* Page Description */}
        <div className="flex flex-wrap text-textColor mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            sit rem voluptate perferendis impedit magni, quidem repellat,
            obcaecati unde tempore amet provident fuga repudiandae, eius
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
        <div className="max-lg:hidden bg-mainColor w-[350px] h-[350px] rounded-3xl shadow-md opacity-70"></div>
        <Image
          src="/hero.png"
          width={1000}
          height={1000}
          alt="Hero"
          className="max-lg:hidden absolute top-0 right-0 object-fit"
        />
      </div>
    </div>
  );
};

export default HeroSection;

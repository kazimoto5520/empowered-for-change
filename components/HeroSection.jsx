import React from "react";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-12 xl:py-24 h-[100vh] max-lg:h-auto xl:pt-28 hero-background">
      <div className="mx-32 max-sm:mx-4 pt-24">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col max-lg:items-center max-lg:text-center max-lg:w-full max-sm:w-full">
            {/* Heading */}
            <div>
              <h1 className="text-5xl text-mainColor font-bold max-sm:text-4xl">
                Girls and Women <br className="max-sm:hidden inline-flex" />{" "}
                Empowerment
              </h1>
            </div>

            {/* Page Description */}
            <div className="flex flex-wrap text-textColor mt-4 max-w-[512px]">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum sit rem voluptate perferendis impedit magni, quidem
                repellat, obcaecati unde tempore amet provident fuga
                repudiandae, eius ipsum.
              </p>
            </div>
            {/* Buttons - Discover more and Watch video */}
            <div className="flex items-center gap-x-4 mt-4">
              <Button className="bg-mainColor text-white rounded-xl hover:bg-textColor hover:duration-300">
                Discover more
              </Button>
              <div className="flex items-center gap-x-2">
                <div className="bg-mainColor rounded-full p-3 text-center hover:bg-textColor hover:duration-300 hover:cursor-pointer">
                  <FaPlay size={16} className="text-white" />
                </div>
                <h1 className="text-textColor hover:cursor-pointer">
                  Watch video
                </h1>

              </div>
            </div>
          </div>
          <div className="max-lg:hidden flex relative">
            <div className="bg-hero bg-no-repeat absolute -top-36 -right-2 w-[500px] h-[500px]">
              <div className="w-[462px] h-[462px]">
                <Image src="/assets/hero-pic.png" width={1000} height={1000} priority alt="" className="hero-pic object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa6";

const LatestBlogs = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col">
        {/* Heading :: Latest Blogs & Insights */}
        <div className="flex justify-between items-center">
          <h1 className="text-textColor font-bold text-4xl">
            Latest Blogs & Insights
          </h1>
          <Button className="bg-mainColor text-white rounded-xl shadow-md hover:bg-textColor hover:duration-300">
            More Blogs
          </Button>
        </div>

        {/* Page Description */}
        <div className="mt-4">
          <p className="text-textColor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            eos optio blanditiis animi maxime provident nostrum <br />{" "}
            architecto accusantium, sequi quae! Totam, atque! Illo fuga
            doloremque dolorem impedit, iste vero numquam nulla quos
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-8 w-full text-textColor">
          <Carousel className="w-full max-w-sm">
            <CarouselContent>
              <CarouselItem className="md:w-1/2 lg:w-1/3">
                <div className="border border-gray-300 shadow-lg rounded-2xl">
                  <div className="flex flex-col">
                    <Image
                      src="/women.png"
                      width={500}
                      height={500}
                      alt="card"
                      className="rounded-tl-2xl rounded-tr-2xl"
                    />
                    <div className="flex flex-col">
                      <h1 className="font-semibold text-xl">
                        Creating Daily Business for <br /> Women
                      </h1>
                      <div className="flex">
                        <FaCalendar />
                        <p>December 20, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:w-1/2 lg:w-1/3">
                Number 2
              </CarouselItem>
              <CarouselItem className="md:w-1/2 lg:w-1/3">
                Number 3
              </CarouselItem>
              <CarouselItem className="md:w-1/2 lg:w-1/3">
                Number 4
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;

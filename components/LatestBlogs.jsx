"use client";

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
import Link from "next/link";

const LatestBlogs = () => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Dump data for Blogs

  const blogs = [
    {
      title: "Creating Daily Business for Women",
      date: "December 20, 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio. Lorem ipsum dolor sit amet. jghhgf uutuy 7t76t7 igjhghgh 7t7t7t76 iyiuyiyiy",
      image: "/women.png",
    },

    {
      title: "New Consultation for Women",
      date: "January 12, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio. Lorem ipsum dolor sit amet.",
      image: "/women1.jpg",
    },

    {
      title: "Great Ideas for Entrepreneurial Women",
      date: "February 2, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio. Lorem ipsum dolor sit amet.",
      image: "/women2.jpg",
    },

    {
      title: "Women Empowerment For Change",
      date: "February 17, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio. Lorem ipsum dolor sit amet.",
      image: "/women.png",
    },
  ];

  return (
    <div className="mt-16 mx-32 max-sm:mx-4 max-lg:mx-8" id="blog">
      <div className="flex flex-col">
        {/* Heading :: Latest Blogs & Insights */}
        <div className="flex justify-between items-center">
          <h1 className="text-textColor font-bold text-4xl max-sm:p-1 max-sm:text-3xl">
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
        <div className="mt-8 max-lg:mt-4 w-full text-textColor">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="max-sm:py-2 max-sm:px-6 max-lg:py-2 max-lg:px-8 gap-4 px-8 py-6">
              {blogs.map((blog) => (
                <CarouselItem
                  key={blog.title}
                  className="grid gap-4 md:basis-1/2 lg:basis-1/3 max-sm:py-2 max-sm:px-4 border border-gray-300 shadow-md rounded-2xl hover:cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-cover bg-no-repeat -ml-4">
                    <Image
                      src={blog.image}
                      width={500}
                      height={500}
                      alt="card"
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                    <Link href="#!">
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </Link>
                  </div>

                  <div className="p-6">
                    <div>
                      <h1 className="font-semibold text-xl">{blog.title}</h1>
                    </div>

                    <div className="flex items-center space-x-4 mt-4">
                      <FaCalendar size={16} />
                      <p className="text-sm text-gray-400">{blog.date}</p>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm">{blog.description.length < 100 ? blog.description : blog.description.substring(0, 100) + "..."}</p>

                      <Link href="#" className="text-mainColor text-sm mt-4">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="max-sm:hidden max-lg:hidden" />
            <CarouselNext className="max-sm:hidden max-lg:hidden" />
            <div className="py-2 text-center text-sm text-muted-foreground font-medium">
              Slide {current} of {count}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogs;

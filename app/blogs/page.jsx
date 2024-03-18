import React from "react";
import Image from "next/image";
import {FaCalendar} from "react-icons/fa6";
import Pagination from "@/components/Pagination";

const Page = () => {
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
    <div className="mx-32 my-16 max-sm:mx-4 max-lg:mx-8">
      <h1 className="text-textColor text-center mb-6 font-bold text-4xl max-sm:p-1 max-sm:text-3xl">
        All Blogs
      </h1>

      <div className="grid grid-cols-1 gap-12 text-mainColor">
        {blogs.map((blog, i) => (
          <div key={i} className="flex gap-x-12 bg-white rounded-lg shadow-lg max-sm:flex-col">
            <div className="flex-shrink-0 w-1/2 max-w-[500px] max-sm:w-full">
              <Image
                src={blog.image}
                width={1000}
                height={1000}
                alt="card"
                className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg max-sm:rounded-tl-lg max-sm:rounded-tr-lg max-sm:rounded-bl-none"
              ></Image>
            </div>

            <div>
              <div className="p-4">
                <h1 className="font-semibold text-xl mb-2">{blog.title}</h1>
                <p className="text-gray-700">{blog.description}</p>
                <div className="flex items-center space-x-4 mt-4">
                  <FaCalendar size={16}/>
                  <p className="text-sm text-gray-400">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Pagination />
      </div>
    </div>
  );
};

export default Page;

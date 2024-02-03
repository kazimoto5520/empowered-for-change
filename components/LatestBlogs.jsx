import React from "react";
import {Button} from "./ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import {FaCalendar} from "react-icons/fa6";
import Link from "next/link";

const LatestBlogs = () => {

    // Dump data for Blogs

    const blogs = [
        {
            title: "Creating Daily Business for Women",
            date: "December 20, 2023",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio. Lorem ipsum dolor sit amet.",
            image: "/women.png"
        },

        {
            title: "New Consultation for Women",
            date: "January 12, 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio. Lorem ipsum dolor sit amet.",
            image: "/women1.jpg"
        },

        {
            title: "Great Ideas for Entrepreneurial Women",
            date: "February 2, 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio. Lorem ipsum dolor sit amet.",
            image: "/women2.jpg"
        },

        {
            title: "Women Empowerment For Change",
            date: "February 17, 2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, optio. Lorem ipsum dolor sit amet.",
            image: "/women.png"
        },
    ]

    return (
        <div className="mt-16" id="blog">
            <div className="flex flex-col">
                {/* Heading :: Latest Blogs & Insights */}
                <div className="flex justify-between items-center">
                    <h1 className="text-textColor font-bold text-4xl">
                        Latest Blogs & Insights
                    </h1>
                    <Button
                        className="bg-mainColor text-white rounded-xl shadow-md hover:bg-textColor hover:duration-300">
                        More Blogs
                    </Button>
                </div>

                {/* Page Description */}
                <div className="mt-4">
                    <p className="text-textColor">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
                        eos optio blanditiis animi maxime provident nostrum <br/>{" "}
                        architecto accusantium, sequi quae! Totam, atque! Illo fuga
                        doloremque dolorem impedit, iste vero numquam nulla quos
                    </p>
                </div>

                {/* Carousel */}
                <div className="mt-8 w-full text-textColor">
                    <Carousel className="w-full" opts={{
                        align: "start",
                        loop: true
                    }}>
                        <CarouselContent className="">
                            {blogs.map(blog => (
                                <CarouselItem key={blog.title} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                    <div className="border border-gray-300 shadow-lg rounded-2xl">
                                        <div className="flex flex-col">
                                            <div className="aspect-w-16 aspect-h-9">
                                            <Image
                                                src={blog.image}
                                                width={500}
                                                height={500}
                                                alt="card"
                                                className="w-full h-full object-center rounded-tl-2xl rounded-tr-2xl"
                                            />
                                            </div>
                                            <div className="flex flex-col px-4 py-2">
                                                <h1 className="font-semibold text-xl">
                                                    {blog.title}
                                                </h1>
                                                <div className="flex items-center space-x-4 mt-4">
                                                    <FaCalendar size={16}/>
                                                    <p className="text-sm text-gray-400">{blog.date}</p>
                                                </div>

                                                <div className="mt-2">
                                                    <p className="text-sm">{blog.description}</p>
                                                    <Link href="#" className="text-mainColor text-sm mt-2">Learn
                                                        more...</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default LatestBlogs;

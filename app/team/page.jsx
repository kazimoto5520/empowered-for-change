import React from "react";
import Image from "next/image";
import {FaCalendar, FaSquareFacebook, FaSquareXTwitter} from "react-icons/fa6";
import Pagination from "@/components/Pagination";
import Link from "next/link";

const Page = () => {
    const members = [
        {
            name: "Kwayu Mmari",
            position: "Head Director",
            image: "/women.png",
            facebook: "/",
            twitter: "/",
            phone: "#",
        },
        {
            name: "Meshack Kazimoto",
            position: "Developer",
            image: "/women1.jpg",
            facebook: "/",
            twitter: "/",
            phone: "#",
        },
        {
            name: "Kazimoto",
            position: "Co Founder",
            image: "/women.png",
            facebook: "/",
            twitter: "/",
            phone: "#",
        },
        {
            name: "Danny",
            position: "Assistant",
            image: "/women.png",
            facebook: "/",
            twitter: "/",
            phone: "#",
        },
    ];

    return (
        <div className="mx-32 my-16 max-sm:mx-4 max-lg:mx-8">
            <h1 className="text-textColor text-center mb-6 font-bold text-4xl max-sm:p-1 max-sm:text-3xl">
                All Team Members
            </h1>

            <div className="grid grid-cols-1 gap-12 text-mainColor">
                {members.map((member, i) => (
                    <div key={i} className="flex gap-x-12 bg-white rounded-lg shadow-lg max-sm:flex-col">
                        <div className="flex-shrink-0 w-1/2 max-w-[500px] max-sm:w-full">
                            <Image
                                src={member.image}
                                width={1000}
                                height={1000}
                                alt="card"
                                className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg max-sm:rounded-tl-lg max-sm:rounded-tr-lg max-sm:rounded-bl-none"
                            ></Image>
                        </div>

                        <div>
                            <div className="p-4">
                                <h1 className="font-semibold text-xl mb-2">{member.name}</h1>
                                <p className="text-gray-700">{member.position}</p>
                                <div className="flex items-center space-x-4 mt-4">
                                    <div className="flex items-center space-x-2 text-mainColor">
                                        <Link href={member.twitter}>
                                            <FaSquareXTwitter size={20}/>
                                        </Link>
                                        <Link href={member.facebook}>
                                            <FaSquareFacebook size={20}/>
                                        </Link>
                                    </div>
                                    <div className="text-mainColor text-sm">
                                        <Link href={member.phone}>Call Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12">
                <Pagination/>
            </div>
        </div>
    );
};

export default Page;

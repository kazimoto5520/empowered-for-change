"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  FaCalendar,
  FaFacebook,
  FaSquareFacebook,
  FaSquareXTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const OurTeam = () => {
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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-16 mx-32 max-sm:mx-4 max-lg:mx-8" id="contact">
      <div className="flex flex-col">
        {/* Heading :: Latest Blogs & Insights */}
        <div className="flex justify-between items-center">
          <h1 className="text-textColor font-bold text-4xl max-sm:text-3xl max-sm:p-1">
            Meet Our Trusted Expertise
          </h1>
          <Button className="bg-mainColor text-white rounded-xl shadow-md hover:bg-textColor hover:duration-300">
            All Team Members
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
        <div className="mt-16 w-full text-textColor">
          <div
            className="grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-lg:grid-cols-2"
            data-aos="fade-up"
          >
            {members.map((member) => (
              <div key={member.name} className="grid gap-4">
                <div className="border border-gray-300 shadow-md rounded-2xl">
                  <div className="flex flex-col">
                    <div className="aspect-w-16 aspect-h-9">
                      <Image
                        src={member.image}
                        width={500}
                        height={500}
                        alt="card"
                        className="w-full h-full object-center rounded-tl-2xl rounded-tr-2xl"
                      />
                    </div>
                    <div className="flex flex-col px-4 py-2">
                      <h1 className="font-semibold text-lg">{member.name}</h1>
                      <p className="text-xs text-gray-400">{member.position}</p>

                      <Separator className="my-4" />
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center space-x-2 text-mainColor">
                          <Link href={member.twitter}>
                            <FaSquareXTwitter size={20} />
                          </Link>
                          <Link href={member.facebook}>
                            <FaSquareFacebook size={20} />
                          </Link>
                        </div>
                        <div className="text-mainColor text-sm">
                          <Link href={member.phone}>Call Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

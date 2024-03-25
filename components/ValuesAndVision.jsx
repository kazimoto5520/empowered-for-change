"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaCircleUser, FaHandHoldingDroplet, FaPodcast } from "react-icons/fa6";
import { Button } from "./ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const ValuesAndVision = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mt-16 mx-32 max-sm:mx-4 max-lg:mx-8">
      {/* Image */}
      <div className="flex justify-between items-center gap-x-24 px-2 py-2 max-sm:gap-x-0">
        <div
          className="max-lg:hidden max-sm:hidden max-w-[600px]"
          data-aos="fade-right"
        >
          <div className="p-6" style={{ width: "500px", height: "500px" }}>
            <Image
              src="/assets/person-4.jpeg"
              width={500}
              height={500}
              alt="Women"
              className="max-lg:hidden max-sm:hidden w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="absolute top-0 -right-16">
            <Image
              src="/assets/dots.png"
              width={72}
              height={72}
              alt="dots"
            />
          </div>

          <div className="absolute -top-8 -left-16 z-30">
            <Image
              src="/assets/person-7.png"
              width={150}
              height={150}
              alt="person 7"
            />
          </div>

          <div className="absolute bg-orange-400 w-full rounded-2xl shadow-md -mt-16">
            <div className="flex items-center gap-x-8 p-6">
              <div className="flex bg-white p-4 rounded-xl">
                <Image src="/assets/Cup.png" width={50} height={50} alt="Cup" />
              </div>
              <div className="flex flex-col text-white">
                <h1 className="text-4xl font-bold">25+</h1>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 -right-16">
            <Image
              src="/assets/person-6.png"
              width={150}
              height={150}
              alt="person 6"
            />
          </div>
        </div>

        {/* Another section starts here */}
        <div className="text-textColor" data-aos="fade-left">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold max-sm:text-3xl">
                Tanzania non- <br className="max-sm:hidden inline-flex" />
                governmental organization
              </h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                dignissimos deserunt, veniam, expedita autem fugit perspiciatis
                ut, eum omnis esse vitae perferendis libero ab dicta!
              </p>
            </div>
            <div className="flex flex-col mt-4 gap-y-6">
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="flex items-center gap-x-8">
                  {/* Icon / Image */}
                  <div>
                    <div className="bg-[#fdac6c] p-3 rounded-full">
                      <FaHandHoldingDroplet
                        size={28}
                        className="text-white bg-mainColor p-1 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-textColor">
                    <h1 className="font-bold text-lg">Company Values</h1>
                    <div className="text-sm mt-2">
                      <p>
                        1. Our innovative approaches deliver sustainable impact
                      </p>
                      <p>
                        2. Through learning we deliver quality programs and
                        services
                      </p>
                      <p>3. We achieve results with integrity</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="flex items-center gap-x-8">
                  {/* Icon / Image */}
                  <div>
                    <div className="bg-[#fdac6c] p-3 rounded-full">
                      <FaPodcast
                        size={28}
                        className="text-white bg-mainColor p-1 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="text-textColor">
                    <h1 className="font-bold text-lg">Company Missions</h1>
                    <div className="text-sm mt-2">
                      <p>
                        1. Our innovative approaches deliver sustainable impact
                      </p>
                      <p>
                        2. Through learning we deliver quality programs and
                        services
                      </p>
                      <p>3. We achieve results with integrity</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div
                    className="rounded-full overflow-hidden"
                    style={{ width: "72px", height: "72px" }}
                  >
                    <Image
                      src="/avatar.png"
                      width={100}
                      height={100}
                      alt="User Profile"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-4">
                    <h1 className="font-bold">Kwayu Mmari</h1>
                    <p className="text-xs text-gray-400">Chairman & Founder</p>
                  </div>
                </div>
                <div>
                  <Button className="bg-mainColor text-white rounded-xl shadow-md hover:bg-textColor hover:duration-300">
                    <Link href="#footer">More About Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesAndVision;

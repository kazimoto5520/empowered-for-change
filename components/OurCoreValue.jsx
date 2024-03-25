"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FaChartSimple, FaLightbulb, FaScaleBalanced } from "react-icons/fa6";
import { Button } from "./ui/button";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const OurCoreValue = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Dump data for Card

  const cards = [
    {
      id: "01",
      title: "Equality",
      icons: <FaScaleBalanced size={30} className="text-white" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus dolore animi dolorum, voluptatibus necessitatibus minima pariatur mollitia ullam numquam?",
    },
    {
      id: "02",
      title: "Empowerment",
      icons: <FaChartSimple size={30} className="text-white" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus dolore animi dolorum, voluptatibus necessitatibus minima pariatur mollitia ullam numquam?",
    },
    {
      id: "03",
      title: "Accountability",
      icons: <FaLightbulb size={30} className="text-white" />,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus dolore animi dolorum, voluptatibus necessitatibus minima pariatur mollitia ullam numquam?",
    },
  ];

  return (
      <div className="background-values h-[100vh] mt-16 max-sm:h-auto max-lg:h-auto">
        <div className="absolute w-full max-w-[128px] m-0 max-sm:hidden max-lg:max-w-[72px]" data-aos="fade-right">
          <Image src="/assets/top-left-lines-1.png" width={500} height={500} alt="top-left"/>
        </div>

        <div className="mt-8 mx-32 max-sm:mx-4 max-lg:mx-8" id="about">
          <div className="flex flex-col max-sm:py-4 py-24">
            {/* Heading :: Our Core Value */}
            <div className="flex flex-col items-center justify-center text-textColor">
              <h1 className="text-5xl font-bold max-sm:text-3xl">
                Our Core Values?
              </h1>
              <p className="text-center mt-6 max-w-[800px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                quis fuga id cupiditate ullam veritatis voluptate voluptatibus.
                Ipsam facilis possimus modi, architecto quos commodi velit.
              </p>
            </div>
            <div
                className="grid grid-cols-3 gap-8 mt-16 max-sm:mt-8 max-sm:grid-cols-1 max-sm:gap-6 max-sm:items-center"
                data-aos="fade-up"
            >
              {cards.map((card) => (
                  <div
                      key={card.id}
                      className="grid bg-cardColor rounded-2xl shadow-md"
                  >
                    <div className="flex flex-col py-4 px-6">
                      <div className="flex justify-between items-center">
                        <div className="bg-mainColor p-4 rounded-2xl shadow-md shadow-[#fdac6c]">
                          {card.icons}
                        </div>
                        <div>
                          <h1 className="font-bold text-4xl text-[#fdac6c]">
                            {card.id}
                          </h1>
                        </div>
                      </div>
                      <div className="mt-6 text-textColor">
                        <h1 className="font-bold text-xl mb-2">{card.title}</h1>
                        <p className="text-sm">{card.description}</p>
                        <Link href="#" className="text-mainColor text-sm mt-2">
                          Learn more...
                        </Link>
                      </div>
                    </div>
                  </div>
              ))}
            </div>

            <center>
              <div className="mt-10">
                <Button className="bg-mainColor text-white rounded-xl shadow-md hover:bg-textColor hover:duration-300">
                  View All Services
                </Button>
              </div>
            </center>
          </div>
        </div>
      </div>
  );
};

export default OurCoreValue;

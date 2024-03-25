"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MdOutlinePhone } from "react-icons/md";
import CountUp, { useCountUp } from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Statistics = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="mt-16 mb-16 background-statistics max-sm:mt-4 max-lg:mt-8"
      id="events"
    >
      <div className="relative p-12 mx-20 flex flex-col max-sm:mx-4 max-lg:mx-8 max-sm:p-4 max-lg:p-8">
        <div className="flex justify-between items-center my-12">
          <div className="flex flex-col max-w-[600px] max-lg:-ml-8">
            {/* Heading and Paragraph */}
            <h1 className="text-white text-4xl font-bold drop-shadow-lg shadow-black max-sm:text-3xl">
              We expect to work <br className="max-sm:hidden inline-flex" />
              with various partners
            </h1>
            <p className="text-white my-4 max-w-[500px] max-lg:max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              blanditiis consequatur dolorem fugit illo iste mollitia quis, quod
              rem ullam?
            </p>

            {/* Card and Picture */}
            <div className="w-fit grid grid-cols-2 gap-2 bg-white rounded-2xl shadow-md items-center mt-8 max-sm:mt-2 max-sm:gap-1">
              <div className="max-w-[200]">
                <Image
                  src="/women3.jpg"
                  width={200}
                  height={200}
                  alt="cover"
                  className="rounded-tl-2xl rounded-bl-2xl object-cover"
                />
              </div>
              <div className="col-span-1 text-sm text-textColor px-3 py-2 max-sm:text-xs max-sm:px-6">
                <ul className="list-disc">
                  <li>The Best Plan For Business</li>
                  <li>Make Your Business Improve</li>
                  <li>Solve Your Financial Liquidity</li>
                </ul>
              </div>
            </div>

            {/* Hire Us Now Contact Icon */}

            <div
              data-aos="fade-up"
              className="flex items-center space-x-6 my-4"
            >
              <div>
                <Button className="bg-mainColor text-white rounded-xl shadow-md hover:bg-textColor hover:duration-300">
                  Hire Us Now
                </Button>
              </div>

              <div className="col-span-1 flex items-center space-x-2">
                <MdOutlinePhone
                  size={32}
                  className="rounded-full text-white p-1 border border-white"
                />
                <div className="text-white drop-shadow-lg shadow-black">
                  <p className="text-sm">24/7 Support Team</p>
                  <h1 className="font-semibold text-lg max-sm:text-sm">
                    +255 710 704 877
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/*   Right Hand Side :: Image */}
          <div className="relative rounded-2xl max-sm:hidden">
            {/*<Image
              src="/women3.jpg"
              width={500}
              height={500}
              alt="Right Hand Picture"
              className="rounded-2xl object-cover"
            />*/}

            <div className="bg-statistics_img bg-no-repeat bg-cover bg-center absolute -top-60 -right-2 w-[300px] h-[400px] rounded-2xl max-lg:w-[250px]">
              {/* Card :: Selection Items */}
              <div
                className="absolute top-1/4 -right-1/3 -translate-y-1/2 w-ful max-h-full overflow-hidden flex flex-col items-center bg-white rounded-2xl shadow-md max-lg:-right-12 max-lg:w-[128px]"
                data-aos="fade-up"
              >
                <div className="w-full text-textColor px-2 py-4 hover:bg-[#f9cdab] hover:duration-300 hover:cursor-pointer">
                  <h1 className="text-base font-bold max-lg:text-sm">
                    Expert Team
                  </h1>
                  <p className="text-xs max-lg:text-xs">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>

                <div className="w-full text-white bg-mainColor p-2 hover:text-textColor hover:duration-300 hover:cursor-pointer">
                  <h1 className="text-base font-bold max-lg:text-sm">
                    Target Fulfill
                  </h1>
                  <p className="text-xs max-lg:text-xs">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>

                <div className="w-full text-textColor p-2 hover:bg-[#f9cdab] hover:duration-300 hover:cursor-pointer">
                  <h1 className="text-base font-bold max-lg:text-sm">
                    Achieve Goal
                  </h1>
                  <p className="text-xs max-lg:text-xs">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*    TODO: Bar*/}
        <div className="w-full absolute bottom-0 left-0 translate-y-1/2">
          <div className="bg-white shadow-md rounded-3xl px-6 py-6 max-sm:py-4 max-lg:py-4">
            <div className="flex items-center gap-x-20 px-4 max-sm:px-2 max-sm:gap-x-8 max-lg:gap-x-12">
              <div className="flex items-center space-x-2">
                <div className="flex flex-col items-center text-center justify-center">
                  <h1 className="text-mainColor text-4xl font-bold my-2 max-sm:text-2xl">
                    {/*22K+*/}
                    <CountUp start={0} end={22} enableScrollSpy={true} />
                    K+
                  </h1>
                  <p className="text-textColor font-medium max-sm:text-sm max-sm:text-center">
                    Project Completed
                  </p>
                </div>
              </div>
              <div className="h-[0.125rem] w-16 bg-gray-300 border-t border-b border-white rotate-90"></div>

              <div className="flex items-center space-x-2">
                <div className="flex flex-col items-center text-center justify-center">
                  <h1 className="text-mainColor text-4xl font-bold my-2 max-sm:text-2xl">
                    {/*50K+*/}
                    <CountUp start={0} end={50} enableScrollSpy={true} />
                    K+
                  </h1>
                  <p className="text-textColor font-medium max-sm:text-sm max-sm:text-center">
                    Happy Customer
                  </p>
                </div>
              </div>
              <div className="h-[0.125rem] w-16 bg-gray-300 border-t border-b border-white rotate-90 max-sm:hidden"></div>

              <div className="flex items-center space-x-2 max-sm:hidden">
                <div className="flex flex-col items-center text-center justify-center">
                  <h1 className="text-mainColor text-4xl font-bold my-2 max-sm:text-2xl">
                    {/*15+*/}
                    <CountUp start={0} end={15} enableScrollSpy={true} />+
                  </h1>
                  <p className="text-textColor font-medium max-sm:text-sm">
                    Award Achieved
                  </p>
                </div>
              </div>
              <div className="h-[0.125rem] w-16 bg-gray-300 border-t border-b border-white rotate-90 max-sm:hidden"></div>

              <div className="flex items-center space-x-2 max-sm:hidden">
                <div className="flex flex-col items-center text-center justify-center">
                  <h1 className="text-mainColor text-4xl font-bold my-2 max-sm:text-2xl">
                    {/*80+*/}
                    <CountUp start={0} end={80} enableScrollSpy={true} />
                    K+
                  </h1>
                  <p className="text-textColor font-medium max-sm:text-sm">
                    Office Branches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

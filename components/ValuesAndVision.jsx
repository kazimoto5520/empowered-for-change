import React from "react";
import Image from "next/image";
import { FaCircleUser, FaHandHoldingDroplet, FaPodcast } from "react-icons/fa6";
import { Button } from "./ui/button";

const ValuesAndVision = () => {
  return (
    <div className="mt-16 mx-32">
      {/* Image */}
      <div className="flex justify-between items-center">
        <div className="" style={{ width: "500px", height: "500px" }}>
          <Image
            src="/women.png"
            width={500}
            height={500}
            alt="Women"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        {/* Another section starts here */}
        <div className="text-textColor col-span-2">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">
                Tanzania non- <br />
                governmental organization
              </h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus{" "}
                <br />
                dignissimos deserunt, veniam, expedita autem fugit perspiciatis{" "}
                <br />
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
                    More About Us
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

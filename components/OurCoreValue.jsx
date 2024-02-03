import React from "react";
import Link from "next/link";
import { FaChartSimple, FaLightbulb, FaScaleBalanced } from "react-icons/fa6";
import { Button } from "./ui/button";

const OurCoreValue = () => {
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
    <div className="mt-16">
      <div className="flex flex-col">
        {/* Heading :: Our Core Value */}
        <div className="flex flex-col items-center justify-center text-textColor">
          <h1 className="font-bold text-5xl">Our Core Values</h1>
          <p className="text-center mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quis fuga id cupiditate ullam veritatis voluptate voluptatibus.
            Ipsam facilis possimus modi, architecto quos commodi velit.
          </p>
        </div>
        <div className="flex justify-between items-center space-x-8 mt-16">
          {cards.map((card) => (
            <div key={card.id} className="bg-cardColor rounded-2xl shadow-lg">
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
                  <Link href="#" className="text-mainColor mt-2">
                    Learn more...
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <center>
          <div className="mt-16">
            <Button className="bg-mainColor text-white rounded-xl shadow-md hover:bg-textColor hover:duration-300">
              View All Services
            </Button>
          </div>
        </center>
      </div>
    </div>
  );
};

export default OurCoreValue;
"use client";

import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLocationDot, FaMobileButton } from "react-icons/fa6";
import { Input } from "./ui/input";
import MobileNavbar from "@/components/MobileNavbar";
import NavItemsComponents from "@/components/NavItemsComponents";
import Socials from "@/components/Socials";
import Image from "next/image";

const NavIcons = () => {
  // Handle the click button
  const [clicked, setClicked] = useState(false);
  const [header, setHeader] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header ? "py-1 bg-white shadow-lg" : "py-1"
      } sticky -top-1 z-30 transition-all max-sm:mt-0`}
    >
      <div className="px-4 py-2 text-mainColor mx-32 max-sm:mx-2 max-lg:mx-8">
        <div className="flex flex-col">
          <div className="flex lg:flex-row justify-between items-center lg:items-start mx-12 max-sm:mx-4 max-lg:mx-8 max-sm:hidden">
            {/* Company Email and Location */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-x-8">
              <div className="flex justify-center items-center gap-2">
                <FaEnvelope size={16} />
                <span className="text-xs">Company@domain.com</span>
              </div>
              <div className="hidden lg:flex justify-center items-center gap-x-2">
                <FaLocationDot size={16} />
                <span className="text-xs">
                  JI. Raya Puputan No 142, TZ - 80234
                </span>
              </div>
            </div>

            {/* Social Media and Search Icons */}
            <Socials setClicked={setClicked} clicked={clicked}/>
          </div>

          {/* Hidden Search Bar for searching items */}
          {clicked && (
            <div className="mt-2 p-1 duration-300">
              <Input
                type="text"
                placeholder="Search"
                className="focus-visible:outline-none focus-visible:ring-mainColor outline-none border-gray-300 rounded-md p-2"
              />
            </div>
          )}

          {/* Navbar starts here */}
          <div className="bg-white shadow-md rounded-full px-8 py-4 mt-2 max-sm:mt-2 max-lg:mt-2">
            <div className="flex justify-between items-center">
              <div className="w-full max-w-[168px]">
                  <Image src="/assets/logo.png" width={500} height={500} alt="logo" className="w-full h-full object-cover"/>
              </div>

             <NavItemsComponents />

              <div className="hidden lg:flex items-center gap-x-2">
                <div className="bg-mainColor rounded-full p-2">
                  <FaMobileButton size={16} className="text-white" />
                </div>
                <div className="text-xs">
                  <h1 className="text-gray-400">Make A Call Anytime</h1>
                  <h1>+255-710-704-877</h1>
                </div>
              </div>

              <div className="flex lg:hidden 2xl:hidden">
                <MobileNavbar />
              </div>

              {/* Navbar in Mobile View */}
              {/*{isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="absolute right-0 top-0 max-sm:w-3/4 w-1/2 h-full bg-white p-8 shadow-md  transition-transform transform translate-x-full duration-300 max-sm:translate-x-0 max-lg:translate-x-0">
                    <div className="flex justify-between items-center p-2">
                      <h1 className="font-bold text-xl uppercase max-sm:text-sm">
                        Empowered <br />
                        For Change
                      </h1>
                      <FaCircleXmark size={20} onClick={toggleModal} />
                    </div>

                    <div className="p-2">
                      <ul className="space-y-4 text-center">
                        {navLinks.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={toggleModal}
                          >
                            <li>{item.name}</li>
                          </Link>
                        ))}
                         Add more nav links as needed
                      </ul>
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-center items-center gap-x-4 mt-4 lg:mt-0">
                        <Link href="#" className="lg:flex">
                          <FaSquareFacebook size={20} />
                        </Link>
                        <Link
                          href="https://twitter.com/mdk_tz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="lg:flex"
                        >
                          <FaSquareXTwitter size={20} />
                        </Link>
                        <Link href="#" className="lg:flex">
                          <FaLinkedin size={20} />
                        </Link>
                        <Link href="#" className="lg:flex">
                          <FaSquareInstagram size={20} />
                        </Link>
                        <FaMagnifyingGlass
                          onClick={() => {
                            setIsOpen(false), setClicked(!clicked);
                          }}
                          size={20}
                          className="hover:cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}*/}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavIcons;

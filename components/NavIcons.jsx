"use client";

import React, {useEffect, useRef, useState} from "react";
import {
    FaEnvelope,
    FaLinkedin,
    FaSquareFacebook,
    FaSquareXTwitter,
    FaLocationDot,
    FaMagnifyingGlass,
    FaMobileButton,
} from "react-icons/fa6";
import Link from "next/link";
import {Input} from "./ui/input";

const NavIcons = () => {
    // Handle the click button
    const [clicked, setClicked] = useState(false);
    const [header, setHeader] = useState(false);

    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        })

        return () => window.removeEventListener("scroll", scrollYPos);
    },)

    //   Dump Data for Nav Links
    const navLinks = [
        {
            name: "Home",
            href: "#top",
        },
        {
            name: "About Us",
            href: "#about",
        },
        {
            name: "Events",
            href: "#events",
        },
        {
            name: "Blog",
            href: "#blog",
        },
        {
            name: "Contact",
            href: "#contact",
        },
    ];

    return (
        <header className={`${header ? "py-4 bg-white shadow-lg" : "py-6"} sticky top-0 z-30 transition-all`}>

            <div className="px-4 py-2 text-mainColor mx-32">
                <div className="flex flex-col">
                    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                        {/* Company Email and Location */}
                        <div className="flex flex-col lg:flex-row lg:gap-y-2 justify-center items-center gap-x-8">
                            <div className="flex justify-center items-center gap-2">
                                <FaEnvelope size={16}/>
                                <span className="text-sm">Company@domain.com</span>
                            </div>
                            <div className="flex justify-center items-center gap-x-2">
                                <FaLocationDot size={16}/>
                                <span className="text-sm">
                JI. Raya Puputan No 142, TZ - 80234
              </span>
                            </div>
                        </div>

                        {/* Social Media and Search Icons */}
                        <div className="flex justify-center lg:justify-end items-center gap-x-4 mt-4 lg:mt-0">
                            <Link href="#">
                                <FaSquareFacebook size={16}/>
                            </Link>
                            <Link href="#">
                                <FaSquareXTwitter size={16}/>
                            </Link>
                            <Link href="#">
                                <FaLinkedin size={16}/>
                            </Link>
                            <FaMagnifyingGlass
                                onClick={() => setClicked(!clicked)}
                                size={16}
                                className="hover:cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Hidden Search Bar for searching items */}
                    {clicked && (
                        <div className="mt-4 p-1 duration-300">
                            <Input
                                type="text"
                                placeholder="Search"
                                className="focus-visible:outline-none focus-visible:ring-mainColor outline-none border-gray-300 rounded-md p-2"
                            />
                        </div>
                    )}

                    {/* Navbar starts here */}
                    <div className="bg-white shadow-md rounded-full px-8 py-4 mt-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="text-lg font-bold">
                                    EMPOWERED <br/>
                                    FOR CHANGE
                                </h1>
                            </div>
                            <div className="flex items-center gap-x-4 font-bold text-textColor">
                                {navLinks.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex items-center gap-x-2">
                                <div className="bg-mainColor rounded-full p-2">
                                    <FaMobileButton size={16} className="text-white"/>
                                </div>
                                <div className="text-xs">
                                    <h1 className="text-gray-400">Make A Call Anytime</h1>
                                    <h1>+255-710-704-877</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavIcons;

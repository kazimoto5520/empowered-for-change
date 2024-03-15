import React from 'react';
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {AlignJustify} from "lucide-react";
import NavItemsComponents from "@/components/NavItemsComponents";
import Socials from "@/components/Socials";
import Link from "next/link";
import {FaLinkedin, FaMagnifyingGlass, FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter} from "react-icons/fa6";

const MobileNavbar = () => {

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
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <AlignJustify className="cursor-pointer"/>
                </SheetTrigger>
                <SheetContent>
                    <div>
                        <div className="flex flex-col gap-y-12">
                            <h1 className="text-lg font-bold max-sm:text-sm text-mainColor">EMPOWERED <br/>
                                FOR CHANGE</h1>

                            <div className="flex flex-col items-center gap-y-4 font-bold text-textColor">
                                {navLinks.map((item) => (
                                    <Link key={item.name} href={item.href}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>


                            <div className="flex justify-center items-center gap-x-4 mt-4 lg:mt-0 text-mainColor">
                                <Link href="#" className="">
                                    <FaSquareFacebook size={16}/>
                                </Link>
                                <Link href="#" className="">
                                    <FaSquareXTwitter size={16}/>
                                </Link>
                                <Link href="#" className="">
                                    <FaLinkedin size={16}/>
                                </Link>
                                <Link href="#" className="">
                                    <FaSquareInstagram size={16}/>
                                </Link>
                               {/* <FaMagnifyingGlass
                                    onClick={() => setClicked(!clicked)}
                                    size={16}
                                    className="hover:cursor-pointer"
                                />*/}
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNavbar;
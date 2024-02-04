"use client"

import Image from "next/image";
import {
    FaAngleRight,
    FaEnvelope,
    FaFacebook, FaInstagram,
    FaLinkedin, FaLocationArrow,
    FaLocationDot,
    FaPhone, FaTelegram,
    FaXTwitter,
    FaYoutube
} from "react-icons/fa6";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";
import {FaTelegramPlane} from "react-icons/fa";

const Footer = () => {
    const images = [
        {
            source: "/sponsor.png",
            alt: "sponsor"
        },

        {
            source: "/sponsor.png",
            alt: "sponsor2"
        },

        {
            source: "/sponsor.png",
            alt: "sponsor4"
        },

        {
            source: "/sponsor.png",
            alt: "sponsor3"
        }

    ]

    return (
        <div className="mt-16">
            <div className="flex flex-col">
                <div className="bg-[#f0832e]">
                    <div
                        className="grid grid-cols-4 mx-20 p-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {images.map(img => (
                            <Image src={img.source} width={200} height={200} alt={img.alt}
                                   className="rounded-full object-cover"/>))}
                    </div>
                </div>

                <div className="bg-[#f9cdab]">
                    <div
                        className="mt-16 grid grid-cols-4 gap-4 mx-20 p-4 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="flex flex-col">
                            <h1 className="uppercase text-white text-2xl font-bold">Empowered <br/>For Change</h1>
                            <p className="text-sm text-textColor my-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Accusamus consequatur excepturi harum in numquam sed!</p>
                            <div className="flex flex-col space-y-2 mt-4">
                                <div className="flex items-center space-x-2">
                                    <FaPhone size={16} className="text-mainColor"/>
                                    <p className="text-textColor text-sm">+255 710 704 877</p>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <FaEnvelope size={16} className="text-mainColor"/>
                                    <p className="text-textColor text-sm">info@business.com</p>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <FaLocationDot size={16} className="text-mainColor"/>
                                    <p className="text-textColor text-sm">78 Simba Street, Dar es Salaam</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="text-white text-2xl font-bold">Our Services</h1>

                            <div className="flex flex-col my-2 space-y-2">
                                <div className="flex items-center space-x-2">
                                    <FaAngleRight size={16} className="text-white shadow-md rounded-full"/>
                                    <p className="text-textColor text-sm">Finance Managing</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaAngleRight size={16} className="text-white shadow-md rounded-full"/>
                                    <p className="text-textColor text-sm">Insurance Policy</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaAngleRight size={16} className="text-white shadow-md rounded-full"/>
                                    <p className="text-textColor text-sm">Finance Strategy</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaAngleRight size={16} className="text-white shadow-md rounded-full"/>
                                    <p className="text-textColor text-sm">Insurance Security</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaAngleRight size={16} className="text-white shadow-md rounded-full"/>
                                    <p className="text-textColor text-sm">Planning Monetary</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="text-white text-2xl font-bold">Advantage <br/> Social Links</h1>
                            <p className="text-sm text-textColor my-2">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Accusamus consequatur excepturi harum in numquam sed!</p>

                            <div className="flex items-center my-2 space-x-4">
                                <div className="text-center bg-mainColor p-2 rounded-full">
                                    <Link href="https://twitter.com/mdk_tz" target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter size={16} className="text-white"/>
                                    </Link>
                                </div>

                                <div className="text-center bg-mainColor p-2 rounded-full">
                                    <Link href="/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook size={16} className="text-white shadow-md rounded-full"/>
                                    </Link>
                                </div>

                                <div className="text-center bg-mainColor p-2 rounded-full">
                                    <Link href="/" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube size={16} className="text-white shadow-md rounded-full"/>
                                    </Link>
                                </div>

                                <div className="text-center bg-mainColor p-2 rounded-full">
                                    <Link href="/" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin size={16} className="text-white shadow-md rounded-full"/>
                                    </Link>
                                </div>
                                <div className="text-center bg-mainColor p-2 rounded-full">
                                    <Link href="/" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={16} className="text-white shadow-md rounded-full"/>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="text-white text-2xl font-bold">Where To <br/> Find Us</h1>
                            <Link href="/" className="text-sm text-textColor my-2">Search Our Location</Link>
                            <Link href="/" className="text-sm text-textColor">Find Nearest One</Link>

                            <div className="flex flex-col my-2 mt-2 space-y-2">
                                <h1 className="text-sm text-textColor mb-2">Subscribe our Newsletter</h1>
                                <div className="relative flex w-full max-w-sm items-center">
                                    <Input type="email" placeholder="Email"
                                           className="rounded-full border-none pr-12 focus-visible:outline-none focus-visible:ring-mainColor outline-none border-gray-300"/>
                                    <Button type="submit"
                                            className="absolute top-0 right-0 bg-mainColor text-white text-center rounded-r-full h-full shadow-md hover:bg-textColor hover:duration-300">
                                        <FaTelegramPlane size={20}/>
                                    </Button>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="my-8 mx-12">
                        <Separator className="bg-white"/>
                    </div>

                    <div className="mx-12 px-8 py-4 flex justify-between items-center">
                        <div className="text-textColor text-sm">
                            <h1>Copyright &copy; 2024 Bizcorpo. All right reserved. </h1>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <Link href="/" className="text-sm text-textColor">Service</Link>
                                <div
                                    className="h-[0.03125rem] w-8 bg-white border-t border-b border-white rotate-90"></div>

                            </div>

                            <div className="flex items-center">
                                <Link href="/" className="text-sm text-textColor">Helps & FAQs</Link>
                                <div
                                    className="h-[0.03125rem] w-8 bg-white border-t border-b border-white rotate-90"></div>
                            </div>

                            <div className="flex items-center">
                                <Link href="/" className="text-sm text-textColor">Careers</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
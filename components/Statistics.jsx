import Image from "next/image";
import {Button} from "@/components/ui/button";
import {MdOutlinePhone} from "react-icons/md";

const Statistics = () => {
    return (
        <div className="mt-16 background-statistics max-sm:mt-4 max-lg:mt-8">
            <div className="relative p-12 mx-20 flex flex-col max-sm:mx-4 max-lg:mx-8 max-sm:p-4 max-lg:p-8">
                <div className="flex justify-between items-center my-12">
                    <div className="flex flex-col">
                        {/* Heading and Paragraph */}
                        <h1 className="text-white text-4xl font-bold max-sm:text-3xl">We expect to work <br className="max-sm:hidden inline-flex"/>with various
                            partners</h1>
                        <p className="text-white my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquam blanditiis consequatur
                            dolorem fugit illo iste mollitia quis, quod rem ullam?</p>

                        {/* Card and Picture */}
                        <div className="w-fit grid grid-cols-2 gap-2 bg-white rounded-2xl shadow-md items-center mt-8 max-sm:mt-2 max-sm:gap-1">
                            <div className="">
                                <Image src="/women3.jpg" width={200} height={200} alt="cover"
                                       className="rounded-tl-2xl rounded-bl-2xl object-cover"/>
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

                        <div className="flex items-center space-x-6 my-4">
                            <div>
                                <Button
                                    className="bg-mainColor text-white rounded-xl shadow-md hover:bg-textColor hover:duration-300">
                                    Hire Us Now
                                </Button>
                            </div>

                            <div className="col-span-1 flex items-center space-x-2">
                                <MdOutlinePhone size={32} className="rounded-full text-white p-1 border border-white"/>
                                <div className="text-white">
                                    <p className="text-sm">24/7 Support Team</p>
                                    <h1 className="font-semibold text-lg max-sm:text-sm">+255 710 704 877</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*   Right Hand Side :: Image */}
                    <div className="relative rounded-2xl max-sm:hidden">
                        <Image src="/women3.jpg" width={500} height={500} alt="Right Hand Picture"
                               className="rounded-2xl object-cover"/>

                        {/* Card :: Selection Items */}
                        <div
                            className="absolute top-1/2 right-0 -translate-y-1/2 w-ful max-h-full overflow-hidden flex flex-col items-center bg-white rounded-2xl shadow-md">
                            <div
                                className="w-full text-textColor px-2 py-4 hover:bg-[#f9cdab] hover:duration-300 hover:cursor-pointer">
                                <h1 className="text-lg font-bold">Expert Team</h1>
                                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                            </div>

                            <div className="w-full text-white bg-mainColor p-2 hover:text-textColor hover:duration-300 hover:cursor-pointer">
                                <h1 className="text-lg font-bold">Target Fulfill</h1>
                                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                            </div>

                            <div
                                className="w-full text-textColor p-2 hover:bg-[#f9cdab] hover:duration-300 hover:cursor-pointer">
                                <h1 className="text-lg font-bold">Achieve Goal</h1>
                                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*    TODO: Bar*/}
                <div className="w-full absolute bottom-0 left-0 translate-y-1/2">
                    <div className="bg-white shadow-md rounded-3xl px-8 py-4 max-sm:py-2">
                        <div className="flex justify-between items-center px-4 max-sm:px-2">
                            <div className="flex items-center space-x-2">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-mainColor text-4xl font-bold my-2 max-sm:text-2xl">22K+</h1>
                                    <p className="text-textColor font-medium max-sm:text-sm max-sm:text-center">Project Completed</p>
                                </div>
                                <div
                                    className="h-[0.125rem] w-16 bg-gray-300 border-t border-b border-white rotate-90"></div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-mainColor text-4xl font-bold my-2 max-sm:text-2xl">50K+</h1>
                                    <p className="text-textColor font-medium max-sm:text-sm max-sm:text-center">Happy Customer</p>
                                </div>
                                <div
                                    className="h-[0.125rem] w-16 bg-gray-300 border-t border-b border-white rotate-90 max-sm:hidden"></div>
                            </div>

                            <div className="flex items-center space-x-2 max-sm:hidden">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-mainColor text-4xl font-bold my-2 max-sm:text-2xl">15+</h1>
                                    <p className="text-textColor font-medium max-sm:text-sm">Award Achieved</p>
                                </div>
                                <div
                                    className="h-[0.125rem] w-16 bg-gray-300 border-t border-b border-white rotate-90"></div>
                            </div>

                            <div className="flex items-center space-x-2 max-sm:hidden">
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-mainColor text-4xl font-bold my-2 max-sm:text-2xl">80+</h1>
                                    <p className="text-textColor font-medium max-sm:text-sm">Office Branches</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statistics;
import React from "react";
import Link from "next/link";
import {
  FaLinkedin,
  FaMagnifyingGlass,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex justify-center items-center gap-x-4 mt-4 lg:mt-0">
      <Link href="#" className="hidden lg:flex">
        <FaSquareFacebook size={16} />
      </Link>
      <Link href="#" className="hidden lg:flex">
        <FaSquareXTwitter size={16} />
      </Link>
      <Link href="#" className="hidden lg:flex">
        <FaLinkedin size={16} />
      </Link>
      <Link href="#" className="hidden lg:flex">
        <FaSquareInstagram size={16} />
      </Link>
      <FaMagnifyingGlass
        onClick={() => setClicked(!clicked)}
        size={16}
        className="hover:cursor-pointer"
      />
    </div>
  );
};

export default Socials;

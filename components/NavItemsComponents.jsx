import React from 'react';
import Link from "next/link";

const NavItemsComponents = () => {

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
        <div className="hidden lg:flex items-center gap-x-4 font-bold text-textColor">
            {navLinks.map((item) => (
                <Link key={item.name} href={item.href}>
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export default NavItemsComponents;
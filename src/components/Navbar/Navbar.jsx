import React from "react";
import { MdMenu } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { header, li, link, nav } from "framer-motion/client";

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#",
    },
    {
        id: 2,
        title: "Categories",
        link: "#",
    },
    {
        id: 3,
        title: "Blog",
        link: "#",
    },
    {
        id: 4,
        title: "About",
        link: "#",
    },
    {
        id: 5,
        title: "Contact",
        link: "#",
    },
];
const Navbar = () => {
    return (
        <header className="text-white">
            <div className="container flex justify-between items-center py-5">
                {/* logo div  */}
                <div className="logo">
                    <img src="/Images/logo.png" alt="" className="max-w-20 invert" />
                </div>

                {/* navLinks  */}
                <nav className="hidden md:block ">
                    <ul className="flex items-center gap-4 ">
                        {NavbarMenu.map((link) => (
                        <UpdateFollower
                        key={link.id}
                                    mouseOptions={{
                                      backgroundColor: "white",
                                      zIndex: 10,
                                      followSpeed: 1.5,
                                      scale: 6,
                                      mixBlendMode: 'difference'
                                    }}>
                            <li key={link.id} className="py-2 px-3 text-base font-semibold cursor-pointer">{link.title}</li>
                            </UpdateFollower>
                        ))}
                        <UpdateFollower
                                    mouseOptions={{
                                      backgroundColor: "white",
                                      zIndex: 10,
                                      followSpeed: 0.5,
                                      scale: 6,
                                      mixBlendMode: 'difference'
                    }}>
                        <button className="ps-10 py-2 text-xl">
                        <FaRegUser />
                        </button>
                        </UpdateFollower>
                    </ul>
                </nav>

                {/* menu Bar  */}
                <div className="text-4xl md:hidden">
                    <MdMenu/>
                </div>

            </div>
        </header>

    );
};

export default Navbar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { useState, useEffect } from "react";

import MobileHeader from "./mobile-menu";
import Logo from "@/public/assets/icons/brite-logo.png";
import { NavMenu } from "../../lib/constants";
import type { NavMenuType } from "@/lib/types";
import UserIcon from "./user-icon";
import Button from "@/components/button";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const renderNavMenu = () => {
        return NavMenu.map((item: NavMenuType) => {
            const isActive = pathname === item.link;
            return (
                <Link
                    key={item.title}
                    href={item.link}
                    className="relative group"
                >
                    <li
                        className={`flex items-center mx-3 py-2 transition-all duration-300 ease-in-out font-medium ${
                            isActive 
                                ? "text-blue-600" 
                                : scrolled ? "text-gray-800 hover:text-blue-600" : "text-gray-600 hover:text-blue-500"
                        }`}
                    >
                        {item.title}
                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-300 ${
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}></span>
                    </li>
                </Link>
            );
        });
    };

    return (
        <nav
            className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
                scrolled 
                    ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200" 
                    : "bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-100"
            }`}
            style={{ top: 'var(--banner-height, 0px)' }}
        >
            {/* MOBILE HEADER - New Layout */}
            <div className="lg:hidden">
                {/* Top Row: Sign In/Phone (Left) | Logo (Center) | Menu (Right) */}
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Left: Sign In & Phone */}
                    <div className="flex items-center gap-2">
                        <UserIcon />
                    </div>

                    {/* Center: Logo */}
                    <Link href="/" className="flex items-center">
                        <Image 
                            className="transition-transform hover:scale-105" 
                            src={Logo} 
                            alt="Brite Logo" 
                            width={60} 
                            height={60}
                            priority
                        />
                    </Link>

                    {/* Right: Menu Button */}
                    <MobileHeader scrolled={scrolled} />
                </div>
            </div>

            {/* DESKTOP CONTENT */}
            <div className="hidden lg:flex w-full items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                {/* LOGO & LINKS */}
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center">
                        <Image 
                            className="transition-transform hover:scale-105" 
                            src={Logo} 
                            alt="Brite Logo" 
                            width={80} 
                            height={80}
                            priority
                        />
                    </Link>
                    {/* DESKTOP LINKS */}
                    <ul className="flex items-center">
                        {renderNavMenu()}
                    </ul>
                </div>

                {/* NAV BUTTONS - DESKTOP */}
                <div className="flex items-center gap-4">
                    <Link href="tel:7048423535">
                        <Button
                            leftChildren
                            roundedFull
                            name="704-842-3535"
                            className="border border-blue-600 text-blue-600 bg-white hover:bg-blue-50" 
                            altColor
                        >
                            <FaPhone className="mr-2" />
                        </Button>
                    </Link>
                    <Link href="/estimate">
                        <Button
                            roundedFull
                            name="Free Estimate"
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                        />
                    </Link>
                    <UserIcon />
                </div>
            </div>
        </nav>
    );
}
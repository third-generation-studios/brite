"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AltNavMenu, NavMenu } from "../../lib/constants";

const FooterMenu = () => {
    const pathname = usePathname();
    return (
        <nav className="flex flex-col space-y-6">
            <h3 className="text-2xl font-bold text-white font-grotesk">
                Quick Links
            </h3>
            <ul className="space-y-3">
                {NavMenu.map((item) => {
                    const isActive = pathname === item.link;
                    return (
                        <li key={item.title}>
                            <Link 
                                href={item.title === "Services" ? "/services" : item.link}
                                className={`text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center group ${
                                    isActive ? "text-blue-400" : ""
                                }`}
                            >
                                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
                {AltNavMenu.map((item) => {
                    const isActive = pathname === item.link;
                    return (
                        <li key={item.title}>
                            <Link 
                                href={item.title === "Services" ? "/services" : item.link}
                                className={`text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center group ${
                                    isActive ? "text-blue-400" : ""
                                }`}
                            >
                                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default FooterMenu;
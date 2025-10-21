"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { NavMenuType } from "@/lib/types";

interface IFAQSidebarNavProps {
    items: NavMenuType[];
}

const FAQSidebarNav = (props: IFAQSidebarNavProps) => {
    const [linkHash, setLinkHash] = useState("#brite");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [navBarHeight, setNavBarHeight] = useState(100);

    useEffect(() => {
        // Get the height of the navigation bar
        const navBar = document.getElementById("#nav-bar");
        if (navBar) {
            setNavBarHeight(navBar.clientHeight);
        }

        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > navBarHeight) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollToSection = (event: React.MouseEvent, link: string) => {
        event.preventDefault();
        setLinkHash(link);
        setDropdownOpen(false);

        // Find the element by ID and apply offset scroll
        const targetElement = document.getElementById(link.substring(1)); // Remove # from the link
        const offsetTop = targetElement?.getBoundingClientRect().top ?? 0;

        // Scroll with offset to account for sticky nav
        window.scrollTo({
            top: window.scrollY + offsetTop - navBarHeight, // Offset by navbar height
            behavior: "smooth",
        });
    };

    const renderMobileDropdown = () => {
        return (
            <nav
                className={`${
                    sticky ? "fixed top-[144px] left-0 w-full bg-white shadow-lg" : ""
                } flex flex-col items-start w-full justify-between border-y border-slate-200 p-4 z-50 transition-transform duration-500 ease-in-out md:hidden rounded-lg`}
            >
                <div className="relative flex w-full h-full">
                    <div className="absolute top-5 right-5">
                        {dropdownOpen ? (
                            <FaChevronUp onClick={() => setDropdownOpen(false)} size={15} className="text-slate-600" />
                        ) : (
                            <FaChevronDown onClick={() => setDropdownOpen(true)} size={15} className="text-slate-600" />
                        )}
                    </div>
                </div>
                {props.items.map((item, index) => {
                    if (linkHash === item.link) {
                        return (
                            <h5
                                key={index}
                                className="text-blue-600 underline underline-offset-2 px-8 py-4 font-semibold"
                            >
                                {item.title}
                            </h5>
                        );
                    } else {
                        return (
                            <div key={index}>
                                {dropdownOpen && (
                                    <div
                                        className="py-4 px-8 text-slate-600 text-sm md:hidden hover:text-blue-600 transition-colors"
                                        key={index}
                                    >
                                        {dropdownOpen && (
                                            <Link
                                                onClick={(e) => handleScrollToSection(e, item.link)}
                                                href={item.link}
                                                className="hover:text-blue-600 transition-colors"
                                            >
                                                {item.title}
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    }
                })}
            </nav>
        );
    };

    const renderRegularNav = () => {
        return (
            <div className="hidden flex-col text-sm pl-10 md:flex md:flex-1">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">FAQ Categories</h3>
                    {props.items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            onClick={(e) => handleScrollToSection(e, item.link)}
                            className={`pb-4 text-slate-600 hover:text-blue-600 ease-in-out duration-300 transition-colors ${
                                linkHash === item.link
                                    ? "text-blue-600 font-semibold"
                                    : ""
                            }`}
                        >
                            <h5 className="hover:translate-x-1 transition-transform">{item.title}</h5>
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="mb-6 w-full md:w-1/3">
            {renderMobileDropdown()}
            {renderRegularNav()}
        </div>
    );
};

export default FAQSidebarNav;

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { MdCopyright } from "react-icons/md";

import ContactCard from "./contact-card";
import SocialsCard from "./socials-card";
import FooterMenu from "./footer-menu";
import LogoCard from "./logo-card";

const Footer = () => {
    return (
        <footer className="relative w-full bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                        {/* Logo Section - Takes 4 columns on large screens */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-4"
                        >
                            <LogoCard />
                        </motion.div>

                        {/* Footer Menu - Takes 4 columns on large screens */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="lg:col-span-4"
                        >
                            <FooterMenu />
                        </motion.div>

                        {/* Contact Card - Takes 4 columns on large screens */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="lg:col-span-4"
                        >
                            <ContactCard />
                        </motion.div>
                    </div>
                </div>

                {/* Social Media Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="border-t border-gray-800"
                >
                    <SocialsCard />
                </motion.div>

                {/* Bottom Bar - Created By */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="border-t border-gray-800 py-8"
                >
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <p className="text-sm text-gray-400">Designed & Developed by</p>
                        <Link
                            className="flex items-center gap-1 group transition-all duration-300"
                            target="_blank"
                            href="https://www.thirdgenerationstudios.com/"
                        >
                            <MdCopyright size={14} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                            <span className="text-gray-500 group-hover:text-blue-400 transition-colors font-medium">
                                Third Generation Studios
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaPhone } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/assets/imgs/action-2.jpg"
                    alt="Professional exterior cleaning service"
                    fill
                    className="object-cover object-top"
                    priority
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20 text-center"
                style={{ paddingTop: "calc(var(--banner-height, 0px) + 80px + 1rem)" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8"
                    >
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Trusted by 500+ Happy Clients
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight font-grotesk"
                    >
                        Transform Your
                        <br />
                        <span className="bg-gradient-to-r from-blue-200 via-white to-blue-100 bg-clip-text text-transparent">
                            Property's Beauty
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
                    >
                        Premium exterior cleaning services that elevate your home or business.
                        Professional, reliable, and worry-free maintenance solutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
                    >
                        <Link href="/estimate">
                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-full font-semibold text-base sm:text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                Get Free Estimate
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <Link href="tel:7048423535">
                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-base sm:text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                <FaPhone />
                                704-842-3535
                            </button>
                        </Link>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 text-white/80 text-xs sm:text-sm px-4"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-xl sm:text-2xl">✓</span>
                            <span>Licensed & Insured</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl sm:text-2xl">✓</span>
                            <span>10+ Years Experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-xl sm:text-2xl">✓</span>
                            <span>100% Satisfaction Guaranteed</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

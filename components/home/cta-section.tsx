"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function CTASection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 animate-gradient bg-[length:200%_200%]"></div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-grotesk">
                        Ready to Transform Your Property?
                    </h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Get a free, no-obligation estimate today and discover why hundreds of homeowners and businesses trust Brite for their exterior cleaning needs.
                    </p>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12 text-white">
                        <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" size={20} />
                            <span className="font-medium">Free Estimate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" size={20} />
                            <span className="font-medium">No Obligation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-400" size={20} />
                            <span className="font-medium">Same-Day Response</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/estimate">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-10 py-5 bg-white text-blue-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 flex items-center gap-3"
                            >
                                Get Your Free Estimate
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                        <Link href="tel:7048423535">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                            >
                                Call: 704-842-3535
                            </motion.button>
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <p className="mt-8 text-blue-200 text-sm">
                        Available Monday - Saturday, 8 AM - 6 PM
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
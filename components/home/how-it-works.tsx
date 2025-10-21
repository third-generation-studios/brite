"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaCalendarCheck, FaSprayCan, FaCheckCircle } from "react-icons/fa";

const steps = [
    {
        icon: <FaPhoneAlt size={32} />,
        title: "Contact Us",
        description: "Reach out via phone, email, or our online form for a free consultation.",
    },
    {
        icon: <FaCalendarCheck size={32} />,
        title: "Schedule Service",
        description: "We'll work with your schedule to find the perfect time for your service.",
    },
    {
        icon: <FaSprayCan size={32} />,
        title: "Expert Cleaning",
        description: "Our professional team delivers exceptional results with premium equipment.",
    },
    {
        icon: <FaCheckCircle size={32} />,
        title: "Enjoy Results",
        description: "Relax and enjoy your beautifully cleaned property with guaranteed satisfaction.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-grotesk">
                        How It Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Simple, straightforward process to get your property looking its best
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 transform -translate-y-1/2"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative"
                            >
                                <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 mb-6 mt-4">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 font-grotesk">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
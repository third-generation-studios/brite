"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaLeaf, FaClock, FaAward, FaUsers, FaDollarSign } from "react-icons/fa";

const features = [
    {
        icon: <FaShieldAlt size={32} />,
        title: "Licensed & Insured",
        description: "Fully licensed and insured for your peace of mind and property protection.",
    },
    {
        icon: <FaLeaf size={32} />,
        title: "Eco-Friendly Solutions",
        description: "Environmentally safe cleaning products that protect your family and pets.",
    },
    {
        icon: <FaClock size={32} />,
        title: "Flexible Scheduling",
        description: "We work around your schedule with convenient appointment times.",
    },
    {
        icon: <FaAward size={32} />,
        title: "Quality Guaranteed",
        description: "100% satisfaction guarantee on all our services, or we'll make it right.",
    },
    {
        icon: <FaUsers size={32} />,
        title: "Expert Team",
        description: "Trained professionals with years of experience in exterior cleaning.",
    },
    {
        icon: <FaDollarSign size={32} />,
        title: "Competitive Pricing",
        description: "Fair, transparent pricing with no hidden fees or surprise charges.",
    },
];

export default function FeaturesGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-grotesk">
                        Why Choose Brite?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We're committed to delivering exceptional service and outstanding results
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 font-grotesk">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
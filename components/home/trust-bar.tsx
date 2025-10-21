"use client";

import { motion } from "framer-motion";
import { FaUsers, FaAward, FaClock, FaStar } from "react-icons/fa";

const stats = [
    { icon: <FaUsers size={32} />, value: "500+", label: "Happy Clients" },
    { icon: <FaAward size={32} />, value: "10+", label: "Years Experience" },
    { icon: <FaClock size={32} />, value: "24/7", label: "Support Available" },
    { icon: <FaStar size={32} />, value: "4.9", label: "Average Rating" },
];

export default function TrustBar() {
    return (
        <section className="py-16 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-4 shadow-lg">
                                {stat.icon}
                            </div>
                            <div className="text-4xl font-bold text-gray-900 mb-2 font-grotesk">
                                {stat.value}
                            </div>
                            <div className="text-gray-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
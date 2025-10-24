"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaLightbulb, FaBuilding, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { ExteriorCleaningProducts, HolidayLightingProducts, CommercialServicesProducts } from "../../lib/Products";

const services = [
    {
        icon: <FaHome size={40} />,
        title: "Exterior Cleaning",
        description: "Professional pressure washing, soft washing, and window cleaning for pristine results.",
        products: ExteriorCleaningProducts,
        link: "/services/exterior-cleaning",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: <FaLightbulb size={40} />,
        title: "Holiday Lighting",
        description: "Custom holiday lighting design, installation, and maintenance for stunning displays.",
        products: HolidayLightingProducts,
        link: "/services/holiday-lighting",
        gradient: "from-blue-500 to-blue-600",
    },
    {
        icon: <FaBuilding size={40} />,
        title: "Commercial Services",
        description: "Comprehensive cleaning solutions tailored for businesses and commercial properties.",
        products: CommercialServicesProducts,
        link: "/services/commercial-services",
        gradient: "from-indigo-500 to-blue-500",
    },
];

const AutoScrollCarousel = ({ children, gradient }: { children: React.ReactNode; gradient: string }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollSpeed = 0.5;

        const scroll = () => {
            scrollAmount += scrollSpeed;
            if (scrollContainer) {
                scrollContainer.scrollLeft = scrollAmount;
                
                // Reset scroll when reaching the end
                if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
        };

        const intervalId = setInterval(scroll, 20);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-hidden"
                style={{ scrollBehavior: 'auto' }}
            >
                {children}
                {children}
            </div>
        </div>
    );
};

export default function ServicesOverview() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
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
                        Our Premium Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive cleaning solutions designed to keep your property looking its absolute best
                    </p>
                </motion.div>

                {/* Services Bento Grid */}
                <div className="space-y-12 mb-12">
                    {services.map((service, serviceIndex) => (
                        <motion.div
                            key={serviceIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: serviceIndex * 0.1, duration: 0.6 }}
                            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                        >
                            {/* Service Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}>
                                    {service.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2 font-grotesk">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            </div>

                            {/* Bento Grid/Carousel of Products */}
                            {service.products.length <= 4 ? (
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    {service.products.map((product, productIndex) => (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: productIndex * 0.05, duration: 0.4 }}
                                        >
                                            <Link href={service.link}>
                                                <div className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer hover:shadow-xl transition-all duration-300">
                                                    {/* Product Image */}
                                                    <Image
                                                        src={product.image}
                                                        alt={product.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                                                        priority={productIndex < 4}
                                                    />
                                                    
                                                    {/* Overlay with Description - Always visible on mobile, hover on desktop */}
                                                    <div className="absolute inset-0 bg-black/70 lg:bg-black/0 lg:group-hover:bg-black/70 transition-all duration-300 flex items-end">
                                                        <div className="p-3 sm:p-4 transform translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 w-full">
                                                            <h4 className="text-white font-bold text-xs sm:text-sm lg:text-base font-grotesk mb-1 sm:mb-2">
                                                                {product.title}
                                                            </h4>
                                                            <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-2 lg:line-clamp-none">
                                                                {product.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <AutoScrollCarousel gradient={service.gradient}>
                                    {service.products.map((product, productIndex) => (
                                        <Link key={product.id} href={service.link}>
                                            <div className="group relative overflow-hidden rounded-2xl bg-gray-100 cursor-pointer hover:shadow-xl transition-all duration-300 flex-shrink-0 w-64 h-64">
                                                {/* Product Image */}
                                                <Image
                                                    src={product.image}
                                                    alt={product.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    sizes="256px"
                                                />
                                                
                                                {/* Overlay with Description - Always visible on mobile, hover on desktop */}
                                                <div className="absolute inset-0 bg-black/70 lg:bg-black/0 lg:group-hover:bg-black/70 transition-all duration-300 flex items-end">
                                                    <div className="p-3 sm:p-4 transform translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300 w-full">
                                                        <h4 className="text-white font-bold text-sm sm:text-base font-grotesk mb-1 sm:mb-2">
                                                            {product.title}
                                                        </h4>
                                                        <p className="text-white/90 text-xs sm:text-sm leading-relaxed line-clamp-2 lg:line-clamp-none">
                                                            {product.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </AutoScrollCarousel>
                            )}

                            {/* Service Link */}
                            <Link href={service.link}>
                                <div className="mt-6 flex items-center text-blue-600 font-semibold hover:gap-2 transition-all group cursor-pointer">
                                    Learn More About {service.title}
                                    <FaArrowRight className="ml-2 group-hover:ml-0 group-hover:translate-x-1 transition-all" size={14} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center"
                >
                    <Link href="/services">
                        <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                            View All Services
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
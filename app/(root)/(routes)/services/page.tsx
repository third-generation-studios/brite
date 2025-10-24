import Image from "next/image";
import Link from "next/link";
import PressureWashing from "@/public/assets/imgs/ex-cleaning.png";
import ChristmasLightingSplash from "@/public/assets/imgs/christmas-lights.jpg";
import CommercialServicePic from "@/public/assets/imgs/h-b-jn.jpg";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | Brite Exterior Cleaning Services",
    description:
        "Discover the range of exterior cleaning services offered by Brite Exterior Cleaning, including pressure washing, window cleaning, and more. Serving Charlotte, NC, and surrounding areas.",
    openGraph: {
        title: "Our Services | Brite Exterior Cleaning Services",
        description:
            "Explore the variety of professional exterior cleaning services provided by Brite Exterior Cleaning. We specialize in pressure washing, window cleaning, and other residential and commercial services.",
        url: "https://briteclt.com/services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Services | Brite Exterior Cleaning Services",
        description:
            "Learn about the exterior cleaning services offered by Brite Exterior Cleaning. From pressure washing to window cleaning, we have you covered!",
    },
};

const choices = [
    {
        title: "Exterior Cleaning",
        description: "Professional pressure washing, soft washing, and window cleaning services for residential properties.",
        image: PressureWashing,
        link: "/services/exterior-cleaning",
    },
    {
        title: "Holiday Lighting",
        description: "Custom holiday lighting design, installation, and maintenance for homes and businesses.",
        image: ChristmasLightingSplash,
        link: "/services/holiday-lighting",
    },
    {
        title: "Commercial Services",
        description: "Comprehensive exterior cleaning solutions tailored for commercial properties and businesses.",
        image: CommercialServicePic,
        link: "/services/commercial-services",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 mt-10 to-slate-50">
            {/* Hero Section */}
            <div className="text-white px-4 py-24 text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
                <p className="text-xl text-slate-300">
                    Professional exterior cleaning and maintenance solutions for homes and businesses
                </p>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {choices.map((choice) => (
                        <Link
                            key={choice.title}
                            href={choice.link}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="relative w-full h-96">
                                <Image
                                    src={choice.image}
                                    alt={choice.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900/90"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    {choice.title}
                                </h2>
                                <p className="text-slate-300 text-sm mb-4">
                                    {choice.description}
                                </p>
                                <span className="inline-flex items-center text-blue-400 font-semibold group-hover:gap-2 transition-all">
                                    Learn More 
                                    <span className="ml-2 group-hover:ml-0 transition-all">→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
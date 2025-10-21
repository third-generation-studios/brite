import React from "react";
import type { Metadata } from "next";
import Splash from "@/components/splash";
import ExteriorCleaningImg from "@/public/assets/imgs/ec-1.jpg";
import BlogPromo from "@/components/promo-stuff/blog-promo";
import { FaCheckCircle, FaHome, FaBuilding, FaSprayCan } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Luxury Exterior Cleaning Services | Brite Estate Care",
    description:
        "Brite Estate Care offers elite exterior cleaning services tailored for luxury homes and high-end businesses. Experience pristine perfection with our premium pressure washing, window detailing, and soft washing services.",
    openGraph: {
        title: "Luxury Exterior Cleaning Services | Brite Estate Care",
        description:
            "Maintain the elegance of your estate with Brite Estate Care. Our specialized exterior cleaning services ensure your property remains in pristine condition, enhancing its value and curb appeal.",
        url: "https://briteclt.com/services/exterior-cleaning",
    },
    twitter: {
        card: "summary_large_image",
        title: "Luxury Exterior Cleaning Services | Brite Estate Care",
        description:
            "Brite Estate Care delivers unparalleled exterior cleaning solutions for luxury homes and high-end businesses. Elevate your estate's sophistication with our meticulous detailing services.",
    },
};

const services = [
    {
        icon: <FaHome size={32} />,
        title: "House Washing",
        description: "Professional soft washing and pressure washing to restore your home's beauty",
    },
    {
        icon: <FaBuilding size={32} />,
        title: "Window Cleaning",
        description: "Crystal-clear windows with streak-free results for residential properties",
    },
    {
        icon: <FaSprayCan size={32} />,
        title: "Roof Cleaning",
        description: "Safe and effective roof cleaning to remove algae, moss, and stains",
    },
];

const benefits = [
    "Increase property value and curb appeal",
    "Protect your investment from damage",
    "Eco-friendly cleaning solutions",
    "Experienced and insured professionals",
    "Satisfaction guaranteed",
];

const ExteriorCleaningPage = () => {
    return (
        <section className="w-full flex flex-col items-center mt-10 bg-slate-50">
            <Splash
                img={ExteriorCleaningImg}
                title="Exterior Cleaning"
                description="Elevate your property's curb appeal with expert exterior cleaning. Our specialized pressure washing, window detailing, and soft washing services ensure a flawless, lasting finish for luxury homes and high-end businesses."
            />

            {/* Services Section */}
            <div className="w-full max-w-7xl mx-auto px-4 py-24">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
                    Our Exterior Cleaning Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="text-blue-600 mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Benefits Section */}
            <div className="w-full bg-gradient-to-b from-slate-900 to-blue-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">
                        Why Choose Brite?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <FaCheckCircle className="text-green-400 flex-shrink-0 mt-1" size={24} />
                                <p className="text-lg text-slate-200">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <BlogPromo />
        </section>
    );
};

export default ExteriorCleaningPage;
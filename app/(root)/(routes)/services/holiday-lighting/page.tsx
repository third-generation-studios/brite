import React from "react";
import type { Metadata } from "next";

import HolidayLightingImg from "@/public/assets/imgs/christmas-lights.jpg";
import Splash from "@/components/splash";
import CareersPromo from "@/components/promo-stuff/careers-promo";
import { FaLightbulb, FaTools, FaSnowflake, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Holiday Lighting Services | Brite Exterior Cleaning Services",
    description:
        "Brighten up your holidays with Brite Exterior Cleaning's professional holiday lighting installation services. Serving homes and businesses in Charlotte, NC and surrounding areas.",
    openGraph: {
        title: "Holiday Lighting Services | Brite Exterior Cleaning Services",
        description:
            "Transform your home or business this holiday season with Brite Exterior Cleaning's expert holiday lighting installation services. Serving Charlotte, NC and nearby areas.",
        url: "https://briteclt.com/services/holiday-lighting",
    },
    twitter: {
        card: "summary_large_image",
        title: "Holiday Lighting Services | Brite Exterior Cleaning Services",
        description:
            "Let Brite Exterior Cleaning handle your holiday lighting installation, creating a beautiful display for your home or business in Charlotte, NC.",
    },
};

const services = [
    {
        icon: <FaLightbulb size={32} />,
        title: "Custom Design",
        description: "Personalized lighting designs tailored to your property's unique architecture",
    },
    {
        icon: <FaTools size={32} />,
        title: "Professional Installation",
        description: "Safe and efficient installation by experienced professionals",
    },
    {
        icon: <FaSnowflake size={32} />,
        title: "Maintenance & Removal",
        description: "Complete service including maintenance throughout the season and removal",
    },
];

const benefits = [
    "Hassle-free holiday decorating",
    "Commercial-grade LED lights",
    "Fully insured and bonded",
    "Flexible scheduling",
    "Storage solutions available",
];

const HolidayLightingPage = () => {
    return (
        <section className="w-full flex flex-col items-center mt-10 bg-slate-50">
            <Splash
                img={HolidayLightingImg}
                title="Holiday Lighting"
                description="Transform your property into a festive wonderland with our professional holiday lighting services. From custom displays to hassle-free installation and maintenance, we create a dazzling, worry-free holiday experience that will light up your season."
            />

            {/* Services Section */}
            <div className="w-full max-w-7xl mx-auto px-4 py-24">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
                    Complete Holiday Lighting Solutions
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
                        Why Choose Our Holiday Lighting?
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

            <CareersPromo />
        </section>
    );
};

export default HolidayLightingPage;
import React from "react";
import type { Metadata } from "next";
import CommercialServicesImg from "@/public/assets/imgs/action-3.jpg";
import FAQPromo from "@/components/promo-stuff/faqs-promo";
import Splash from "@/components/splash";
import { FaBuilding, FaStore, FaWarehouse, FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
    title: "Commercial Services | Brite Exterior Cleaning Services",
    description:
        "Explore Brite Exterior Cleaning's commercial exterior cleaning services, including pressure washing, window cleaning, and more for businesses in Charlotte, NC and surrounding areas.",
    openGraph: {
        title: "Commercial Services | Brite Exterior Cleaning Services",
        description:
            "Discover the comprehensive exterior cleaning services for businesses by Brite Exterior Cleaning, including pressure washing, window cleaning, and other commercial services.",
        url: "https://briteclt.com/services/commercial-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Commercial Services | Brite Exterior Cleaning Services",
        description:
            "Brite Exterior Cleaning offers professional commercial exterior cleaning services, including pressure washing and window cleaning for businesses in Charlotte, NC.",
    },
};

const services = [
    {
        icon: <FaBuilding size={32} />,
        title: "Office Buildings",
        description: "Professional cleaning for office complexes and corporate buildings",
    },
    {
        icon: <FaStore size={32} />,
        title: "Retail Spaces",
        description: "Maintain an inviting storefront with regular cleaning services",
    },
    {
        icon: <FaWarehouse size={32} />,
        title: "Industrial Facilities",
        description: "Heavy-duty cleaning solutions for warehouses and manufacturing sites",
    },
];

const benefits = [
    "Flexible scheduling to minimize disruption",
    "Recurring service plans available",
    "Enhance your business's professional image",
    "Comply with property maintenance standards",
    "Experienced commercial cleaning team",
];

const CommercialServicesPage = () => {
    return (
        <section className="w-full flex flex-col items-center mt-10 bg-slate-50">
            <Splash
                img={CommercialServicesImg}
                title="Commercial Services"
                description="Boost your business's professional appearance with our tailored commercial cleaning solutions. From pressure washing to detailed window cleaning and soft washing, we ensure your commercial property maintains a pristine, impressive look for clients and visitors alike."
            />

            {/* Services Section */}
            <div className="w-full max-w-7xl mx-auto px-4 py-24">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
                    Commercial Cleaning Solutions
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
                        Commercial Service Benefits
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

            <FAQPromo />
        </section>
    );
};

export default CommercialServicesPage;
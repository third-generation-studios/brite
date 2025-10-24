import React from "react";

import Navbar from "../../components/header";
import Footer from "../../components/footer";

import "../globals.css";
import ContactFormContainer from "../../components/forms/contact-form";
import PromotionalBanner from "../../components/promo-stuff/promotional-banner";
import { Metadata } from "next";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

// Define metadata for the layout
export const metadata: Metadata = {
    title: "Brite | Professional Exterior Cleaning Services",
    description:
        "Explore our high-quality exterior cleaning services. Get in touch with Brite for all your cleaning needs.",
};

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full">
            <div className="w-full" style={{ marginTop: 'var(--banner-height, 0px)' }}>
                <Navbar />
                <PromotionalBanner />
                <div className="w-full flex flex-col bg-white">{children}</div>
                <ContactFormContainer />
                <Footer />
            </div>
            <Link
                className="fixed bottom-6 right-6 lg:hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all z-50 animate-pulse hover:scale-110"
                href="tel:7048423535"
            >
                <FaPhone size={24} />
            </Link>
        </div>
    );
}

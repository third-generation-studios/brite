import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import TrustBar from "@/components/home/trust-bar";
import ServicesOverview from "@/components/home/services-overview";
import HowItWorks from "@/components/home/how-it-works";
import BeforeAfterShowcase from "@/components/home/before-after-showcase";
import FeaturesGrid from "@/components/home/features-grid";
import CTASection from "@/components/home/cta-section";
import SocialProof from "./components/social-proof";

export const metadata: Metadata = {
    title: "Brite Exterior Cleaning Services | Transform Your Property",
    description:
        "Premium exterior cleaning services for homes and businesses. Professional pressure washing, window cleaning, and holiday lighting in Charlotte, NC. Get your free estimate today!",
    openGraph: {
        title: "Brite Exterior Cleaning Services | Transform Your Property",
        description:
            "Premium exterior cleaning services for homes and businesses. Professional, reliable, and worry-free maintenance solutions.",
        url: "https://briteclt.com",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brite Exterior Cleaning Services | Transform Your Property",
        description:
            "Premium exterior cleaning services for homes and businesses. Professional, reliable, and worry-free maintenance solutions.",
    },
};

export default async function HomePage() {
    return (
        <main className="w-full">
            <HeroSection />
            <TrustBar />
            <ServicesOverview />
            <HowItWorks />
            <BeforeAfterShowcase />
            <FeaturesGrid />
            <SocialProof/>
            <CTASection />
        </main>
    );
}
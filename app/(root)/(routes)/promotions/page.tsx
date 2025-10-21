import type { Promotion } from "@/sanity.types";
import { getAllPromotions } from "@/sanity/lib/promotions/getAllPromotions";
import PromotionList from "./components/promotion-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Current Promotions | Brite Exterior Cleaning Services",
    description:
        "Check out Brite Exterior Cleaning's current promotions and special offers on exterior cleaning services. Save big on residential and commercial cleaning services in Charlotte, NC.",
    openGraph: {
        title: "Current Promotions | Brite Exterior Cleaning Services",
        description:
            "Explore the latest promotions and discounts on exterior cleaning services offered by Brite Exterior Cleaning. Don't miss out on our limited-time offers!",
        url: "https://briteclt.com/promotions",
    },
    twitter: {
        card: "summary_large_image",
        title: "Current Promotions | Brite Exterior Cleaning Services",
        description:
            "Take advantage of our current promotions and save on exterior cleaning services from Brite Exterior Cleaning. View our latest deals!",
    },
};

export default async function PromotionsPage() {
    const promotions = await getAllPromotions();

    const sortByDate = (a: Promotion, b: Promotion) =>
        new Date(a.startDate!).getTime() - new Date(b.startDate!).getTime();

    const activePromotions = promotions
        .filter((p: Promotion) => p.status === "active")
        .sort(sortByDate);

    const upcomingPromotions = promotions
        .filter((p: Promotion) => p.status === "upcoming")
        .sort(sortByDate);

    const expiredPromotions = promotions
        .filter((p: Promotion) => p.status === "expired")
        .sort(sortByDate);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-50 mt-10">
            {/* Hero Section */}
            <div className="text-white px-4 py-24 text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Special Promotions</h1>
                <p className="text-xl text-slate-300">
                    Save on our premium exterior cleaning services with exclusive offers
                </p>
            </div>

            {/* Promotions Content */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                {/* Active Promotions */}
                {activePromotions.length > 0 && (
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <h2 className="text-3xl font-bold text-white">Active Promotions</h2>
                        </div>
                        <PromotionList promotions={activePromotions} status="active" />
                    </section>
                )}

                {/* Upcoming Promotions */}
                {upcomingPromotions.length > 0 && (
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-white">Coming Soon</h2>
                        </div>
                        <PromotionList promotions={upcomingPromotions} status="upcoming" />
                    </section>
                )}

                {/* Expired Promotions */}
                {expiredPromotions.length > 0 && (
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-400">Past Promotions</h2>
                        </div>
                        <PromotionList promotions={expiredPromotions} status="expired" />
                    </section>
                )}

                {/* No Promotions Message */}
                {activePromotions.length === 0 && upcomingPromotions.length === 0 && expiredPromotions.length === 0 && (
                    <div className="text-center py-24">
                        <p className="text-slate-400 text-xl">No promotions available at this time.</p>
                        <p className="text-slate-500 mt-4">Check back soon for exciting offers!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
import type { Promotion } from "@/sanity.types";
import Link from "next/link";
import React from "react";
import { FaTag, FaCalendarAlt, FaClock } from "react-icons/fa";

interface IPromotionCardProps {
    promotion: Promotion;
    status: "active" | "upcoming" | "expired";
}

const PromotionCard = (props: IPromotionCardProps) => {
    const { promotion, status } = props;
    
    const statusConfig = {
        active: {
            badge: "Active Now",
            badgeColor: "bg-green-500",
            borderColor: "border-green-500",
            textColor: "text-green-600",
        },
        upcoming: {
            badge: "Coming Soon",
            badgeColor: "bg-yellow-500",
            borderColor: "border-yellow-500",
            textColor: "text-yellow-600",
        },
        expired: {
            badge: "Expired",
            badgeColor: "bg-slate-500",
            borderColor: "border-slate-500",
            textColor: "text-slate-600",
        },
    };

    const config = statusConfig[status];

    return (
        <Link
            href="/estimate"
            className={`group relative p-6 bg-white shadow-lg rounded-2xl border-2 ${config.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                status === "expired" ? "opacity-60" : ""
            }`}
        >
            {/* Status Badge */}
            <div className={`absolute top-4 right-4 ${config.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {config.badge}
            </div>

            {/* Discount Badge */}
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-600 text-white rounded-full p-3">
                    <FaTag size={20} />
                </div>
                <div>
                    <p className="text-3xl font-bold text-blue-600">
                        {promotion.discountPercentage}% OFF
                    </p>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {promotion.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 mb-4 line-clamp-3">
                {promotion.description}
            </p>

            {/* Date Range */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                <FaCalendarAlt className={config.textColor} />
                <span>
                    {new Date(promotion.startDate!).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </span>
                <span>-</span>
                <span>
                    {new Date(promotion.endDate!).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </span>
            </div>

            {/* CTA */}
            {status !== "expired" && (
                <div className="mt-6 pt-4 border-t border-slate-200">
                    <span className="text-blue-600 font-semibold group-hover:gap-2 inline-flex items-center transition-all">
                        Claim Offer
                        <span className="ml-2 group-hover:ml-0 transition-all">→</span>
                    </span>
                </div>
            )}
        </Link>
    );
};

export default PromotionCard;
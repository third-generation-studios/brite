"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Promotion } from "@/sanity.types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import axios from "axios";

const PromotionalBanner = () => {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [visiblePromotions, setVisiblePromotions] = useState(new Set<string>());
    const [currentIndex, setCurrentIndex] = useState(0);
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchPromotions = async () => {
            try {
                const { data } = await axios.get("/api/promotions");
                const activePromotions = data.promotions.filter(
                    (p: Promotion) => p.status === "active",
                );

                setPromotions(activePromotions);
                setVisiblePromotions(new Set(activePromotions.map((p: Promotion) => p.title)));
            } catch (error) {
                console.error("Error fetching promotions:", error);
            }
        };

        fetchPromotions();

        // Re-fetch promotions every 5 minutes to keep it updated
        const interval = setInterval(fetchPromotions, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (promotions.length < 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                let nextIndex = (prevIndex + 1) % promotions.length;
                while (!visiblePromotions.has(promotions[nextIndex].title!)) {
                    nextIndex = (nextIndex + 1) % promotions.length;
                    if (nextIndex === prevIndex) return prevIndex; // All promotions hidden
                }
                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [promotions, visiblePromotions]);

    const handleClose = (e: React.MouseEvent, title: string) => {
        e.stopPropagation();
        setVisiblePromotions((prev) => {
            const newSet = new Set(prev);
            newSet.delete(title);
            return newSet;
        });
    };

    const currentPromotion = promotions[currentIndex];
    const isBannerVisible = currentPromotion && visiblePromotions.has(currentPromotion.title!);
    
    // Update CSS custom property for banner height
    useEffect(() => {
        if (isBannerVisible) {
            const updateBannerHeight = () => {
                if (bannerRef.current) {
                    const height = bannerRef.current.offsetHeight;
                    document.documentElement.style.setProperty('--banner-height', `${height}px`);
                }
            };

            updateBannerHeight();
            window.addEventListener('resize', updateBannerHeight);
            return () => window.removeEventListener('resize', updateBannerHeight);
        } else {
            // Set banner height to 0 when no banner is visible
            document.documentElement.style.setProperty('--banner-height', '0px');
        }
    }, [isBannerVisible]);

    if (!isBannerVisible) {
        return null;
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                ref={bannerRef}
                key={currentPromotion.title}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 sm:py-3 px-4 text-xs sm:text-sm cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent navigation on click
            >
                <Link href={"/promotions"} className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 w-full pr-8">
                    <div className="flex justify-center items-center gap-1 sm:gap-2">
                        <span className="text-base sm:text-lg">{renderIcon(currentPromotion.icon)}</span>
                        <span className="font-bold tracking-wide text-xs sm:text-sm">
                            {currentPromotion.title}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
                        <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded-full text-xs">
                            {currentPromotion.discountPercentage}% Off
                        </span>
                        <span className="text-xs sm:text-sm line-clamp-1">{currentPromotion.description}</span>
                    </div>
                </Link>
                <button
                    className="absolute right-1 sm:right-4 top-1/2 z-50 transform -translate-y-1/2 text-white hover:text-white/80 transition-colors p-1"
                    onClick={(e) => handleClose(e, currentPromotion.title!)}
                >
                    <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

const renderIcon = (icon?: string) => {
    switch (icon) {
        case "sparkle":
            return "✨";
        case "star":
            return "⭐";
        case "discount":
            return "💰";
        case "gift":
            return "🎁";
        default:
            return "🔥";
    }
};

export default PromotionalBanner;

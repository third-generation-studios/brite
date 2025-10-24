import { Metadata } from "next";
import React from "react";

import ScrollUpBtn from "../../../../components/scroll-up-btn";
import FAQContainer from "./components/container";
import FAQItem from "./components/item";
import {
    BriteFAQs,
    ExteriorCleaningFAQs,
    HolidayLightingFAQs,
    PressureWashingFAQs,
    SoftWashingFAQs,
    TrashBinCleaningFAQs,
    WindowCleaningFAQs,
} from "@/lib/FAQItems";
import FAQSidebarNav from "./components/sidebar-nav";
import { FAQNavMenu } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | Brite Exterior Cleaning Services",
    description:
        "Have questions about exterior cleaning services? Find answers to the most common questions about Brite's cleaning services, pricing, and process.",
    openGraph: {
        title: "Frequently Asked Questions | Brite Exterior Cleaning Services",
        description:
            "Find answers to the most common questions about Brite's exterior cleaning services, pricing, and process.",
        url: "https://briteclt.com/faqs",
    },
    twitter: {
        card: "summary_large_image",
        title: "Frequently Asked Questions | Brite Exterior Cleaning Services",
        description:
            "Find answers to the most common questions about Brite's exterior cleaning services, pricing, and process.",
    },
};

export default function FAQsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-50 mt-10">
            {/* Hero Section */}
            <div className="text-white px-4 py-24 text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
                <p className="text-xl text-slate-300">
                    Find answers to the most common questions about our services
                </p>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                <div className="flex flex-col w-full gap-10 mb-10 md:my-10 md:flex-row">
                    {/* FAQs Sidebar Nav */}
                    <FAQSidebarNav items={FAQNavMenu} />
                    <div className="flex flex-col flex-1 w-full relative">
                        {/* FAQs */}
                        {/* BRITE */}
                        <FAQContainer title="Brite" id="brite">
                            {BriteFAQs.map((item, index) => {
                                return (
                                    <FAQItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                );
                            })}
                        </FAQContainer>
                        {/* EXTERIOR CLEANING */}
                        <FAQContainer title="Exterior Cleaning" id="exterior-cleaning">
                            {ExteriorCleaningFAQs.map((item, index) => {
                                return (
                                    <FAQItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                );
                            })}
                        </FAQContainer>
                        {/* HOLIDAY LIGHTING */}
                        <FAQContainer title="Holiday Lighting" id="holiday-lighting">
                            {HolidayLightingFAQs.map((item, index) => {
                                return (
                                    <FAQItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                );
                            })}
                        </FAQContainer>
                        {/* PRESSURE WASHING */}
                        <FAQContainer title="Pressure Washing" id="pressure-washing">
                            {PressureWashingFAQs.map((item, index) => {
                                return (
                                    <FAQItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                );
                            })}
                        </FAQContainer>
                        {/* SOFT WASHING */}
                        <FAQContainer title="Soft Washing" id="soft-washing">
                            {SoftWashingFAQs.map((item, index) => {
                                return (
                                    <FAQItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                );
                            })}
                        </FAQContainer>
                        {/* TRASH BIN CLEANING */}
                        <FAQContainer title="Trash Bin Cleaning" id="trash-bin-cleaning">
                            {TrashBinCleaningFAQs.map((item, index) => {
                                return (
                                    <FAQItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                );
                            })}
                        </FAQContainer>
                        {/* WINDOW CLEANING */}
                        <FAQContainer title="Window Cleaning" id="window-cleaning">
                            {WindowCleaningFAQs.map((item, index) => {
                                return (
                                    <FAQItem
                                        key={index}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                );
                            })}
                        </FAQContainer>
                    </div>
                </div>
            </div>
            <ScrollUpBtn />
        </div>
    );
}

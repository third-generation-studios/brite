import { Metadata } from "next";
import React from "react";
import { useUser } from "@clerk/nextjs";

import FAQSidebarNav from "../../../../../components/layout/faqs/FAQSidebarNav";
import FAQItem from "../../../../../components/layout/faqs/FAQItem";
import { FAQNavMenu } from "../../../../../lib/constants";
import FAQContainer from "../../../../../components/layout/faqs/FAQContainer";
import ScrollUpBtn from "../../../../../components/ScrollUpBtn";
import PageBanner from "@/components/layout/sections/PageBanner";
import PageBannerContainer from "@/components/layout/sections/PageBannerContainer";

const DummyText =
    "Duis eget mi nec risus condimentum blandit. Integer non lacinia leo. Phasellus auctor dapibus nibh, vel ultrices odio tincidunt eu. Sed id est purus. Sed in neque a ligula fermentum fermentum. Etiam rhoncus tincidunt lectus, sit amet convallis justo fermentum vel. Sed gravida libero vel eros accumsan, a commodo felis aliquam.";

export const metadata: Metadata = {
    title: "Brite FAQs",
    description: "FAQs",
};

export default function FAQsPage() {
    return (
        <section className="flex flex-col w-full bg-white relative">
            {/* TITLE */}
            <PageBannerContainer />
            {/* MAIN PAGE WORKSPACE */}
            <div className="flex flex-col w-full mb-10 md:my-10 md:flex-row">
                {/* FAQs Sidebar Nav */}
                <FAQSidebarNav items={FAQNavMenu} />
                <div className="flex flex-col flex-1 w-full relative">
                    {/* FAQs */}
                    {/* BRITE */}
                    <FAQContainer title="Brite" id="brite">
                        <FAQItem answer={DummyText} question="What is Brite?" />
                        <FAQItem answer={DummyText} question="What is Brite?" />
                        <FAQItem answer={DummyText} question="What is Brite?" />
                    </FAQContainer>
                    {/* EXTERIOR CLEANING */}
                    <FAQContainer title="Exterior Cleaning" id="exterior-cleaning">
                        <FAQItem answer={DummyText} question="What is Exterior Cleaning?" />
                        <FAQItem answer={DummyText} question="What is Exterior Cleaning?" />
                    </FAQContainer>
                    {/* HOLIDAY LIGHTING */}
                    {/* Add other FAQContainers here */}
                </div>
            </div>
            <ScrollUpBtn />
        </section>
    );
}

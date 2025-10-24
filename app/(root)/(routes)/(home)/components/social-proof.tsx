"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import React from "react";
import { useRouter } from "next/navigation";

const SocialProof = () => {
    const router = useRouter();

    return (
        // TODO: UPGRADE TO BASIC PLAN FOR ELFSIGHT TO TAKE OFF ELFSIGHT BRANDING
        <motion.section
            className="bg-slate-50 w-full flex flex-col items-center py-24 px-10 justify-center relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <Script
                src="https://static.elfsight.com/platform/platform.js"
                data-use-service-core
                defer
            ></Script>
            <div
                className="elfsight-app-5569a9cf-9ef8-40cf-a013-e933e23bdd38"
                data-elfsight-app-lazy
            ></div>

            <button
                className="mt-10 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                onClick={() => router.push("/estimate")}
            >
                Get Your Free Estimate!
            </button>
        </motion.section>
    );
};

export default SocialProof;

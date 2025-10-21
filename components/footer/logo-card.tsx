import Image from "next/image";
import React from "react";
import { FaRegCopyright } from "react-icons/fa6";

import Logo from "@/public/assets/icons/brite-logo.png";

const LogoCard = () => {
    return (
        <div className="flex flex-col items-start space-y-6">
            {/* Logo */}
            <div className="flex items-center">
                <Image 
                    loading="eager" 
                    width={120} 
                    src={Logo} 
                    alt="Brite Logo" 
                    className="transition-transform hover:scale-105"
                />
            </div>

            {/* Tagline */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Premium exterior cleaning services that elevate your home or business. 
                Professional, reliable, and worry-free maintenance solutions.
            </p>

            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <FaRegCopyright className="text-gray-600" />
                <span>2025 Brite Exterior Cleaning</span>
            </div>
        </div>
    );
};

export default LogoCard;
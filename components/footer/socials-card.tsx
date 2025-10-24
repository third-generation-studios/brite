import Link from "next/link";
import React from "react";

import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

const SocialsCard = () => {
    return (
        <div className="py-8">
            <div className="flex flex-col items-center space-y-4">
                <h4 className="text-lg font-semibold text-white">Follow Us</h4>
                <div className="flex items-center gap-6">
                    <Link
                        className="group"
                        target="_blank"
                        href="https://www.facebook.com/britelightingllc"
                        aria-label="Visit our Facebook page"
                    >
                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 group-hover:scale-110">
                            <AiFillFacebook size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                    </Link>
                    <Link 
                        className="group"
                        target="_blank" 
                        href="https://www.instagram.com/briteclt/"
                        aria-label="Visit our Instagram page"
                    >
                        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 group-hover:scale-110">
                            <AiOutlineInstagram size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SocialsCard;
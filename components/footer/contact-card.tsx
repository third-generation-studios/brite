import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactCard = () => {
    return (
        <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-bold text-white font-grotesk">
                Contact Us
            </h3>
            
            <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3 group">
                    <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                    <address className="text-gray-400 not-italic leading-relaxed group-hover:text-gray-300 transition-colors">
                        10130 Mallard Creek Rd. Suite 300<br />
                        Charlotte, NC 28262
                    </address>
                </div>

                {/* Office Phone */}
                <div className="flex items-start gap-3 group">
                    <FaPhone className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                    <div>
                        <p className="text-white font-medium mb-1">Office</p>
                        <Link
                            className="text-gray-400 hover:text-white transition-colors"
                            href="tel:7048423535"
                        >
                            704-842-3535
                        </Link>
                    </div>
                </div>

                {/* Sales Email */}
                <div className="flex items-start gap-3 group">
                    <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                    <div>
                        <p className="text-white font-medium mb-1">Sales</p>
                        <Link
                            className="text-gray-400 hover:text-white transition-colors break-all"
                            href="mailto:nick.walker@briteclt.com"
                        >
                            nick.walker@briteclt.com
                        </Link>
                    </div>
                </div>

                {/* Other Inquiries Email */}
                <div className="flex items-start gap-3 group">
                    <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" size={18} />
                    <div>
                        <p className="text-white font-medium mb-1">General Inquiries</p>
                        <Link
                            className="text-gray-400 hover:text-white transition-colors break-all"
                            href="mailto:joey.mckenna@briteclt.com"
                        >
                            joey.mckenna@briteclt.com
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
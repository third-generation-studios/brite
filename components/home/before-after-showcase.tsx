"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function BeforeAfterShowcase() {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(e.target.value));
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-grotesk">
                        See The Transformation
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real results from our professional cleaning services
                    </p>
                </motion.div>

                {/* Before/After Slider */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
                        {/* After Image */}
                        <Image
                            src="https://images.unsplash.com/photo-1729653931030-160b00619e9b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGNsZWFuJTIwZXh0ZXJpb3IlMjBicmlnaHQlMjBzaWRpbmd8ZW58MHwwfHx8MTc2MDcwMTkxMXww&ixlib=rb-4.1.0&q=85"
                            alt="House exterior after pressure washing, clean bright siding, pristine driveway - Zhen Yao on Unsplash"
                            fill
                            className="object-cover"
                        />

                        {/* Before Image with Clip */}
                        <div
                            className="absolute inset-0"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1623007567491-ce060471595f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxob3VzZSUyMGRpcnR5JTIwZXh0ZXJpb3IlMjBzdGFpbmVkJTIwc2lkaW5nfGVufDB8MHx8fDE3NjA3MDE5MTF8MA&ixlib=rb-4.1.0&q=85"
                                alt="House exterior before pressure washing, dirty siding, stained driveway - Melody Ayres-Griffiths on Unsplash"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Slider Line */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                                <div className="flex gap-1">
                                    <div className="w-1 h-6 bg-gray-400 rounded"></div>
                                    <div className="w-1 h-6 bg-gray-400 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Labels */}
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Before
                        </div>
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                            After
                        </div>

                        {/* Slider Input */}
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderPosition}
                            onChange={handleSliderChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
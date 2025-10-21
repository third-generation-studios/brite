import React from "react";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 pb-24">
            <section className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h2 className="text-3xl font-bold text-white">Why Work With Brite?</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            icon: "🌟",
                            title: "Competitive Pay",
                            description:
                                "Earn above industry standards while working in a supportive environment.",
                            status: "active"
                        },
                        {
                            icon: "📅",
                            title: "Flexible Scheduling",
                            description:
                                "We value your time and offer flexible schedules to meet your needs.",
                            status: "active"
                        },
                        {
                            icon: "🌱",
                            title: "Career Growth",
                            description: "Opportunities for advancement in a growing company.",
                            status: "active"
                        },
                    ].map((benefit, index) => (
                        <div key={index} className="group relative p-6 bg-white shadow-lg rounded-2xl border-2 border-green-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 mb-4 line-clamp-3">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;

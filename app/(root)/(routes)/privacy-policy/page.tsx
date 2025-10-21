import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Brite Exterior Cleaning Services",
    description:
        "Read Brite Exterior Cleaning's privacy policy to learn how we collect, use, and protect your personal information when using our services.",
    openGraph: {
        title: "Privacy Policy | Brite Exterior Cleaning Services",
        description:
            "Learn about how Brite Exterior Cleaning collects, uses, and protects your personal information in accordance with our privacy policy.",
        url: "https://briteclt.com/privacy-policy",
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Brite Exterior Cleaning Services",
        description:
            "Learn about how Brite Exterior Cleaning collects, uses, and protects your personal information in our privacy policy.",
    },
};

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-50 mt-10">
            {/* Hero Section */}
            <div className="text-white px-4 py-24 text-center max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
                <p className="text-xl text-slate-300">
                    Learn how we collect, use, and protect your personal information
                </p>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 pb-24">
                <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    {/* PRIVACY POLICY */}
                    <section id="privacy-policy" className="mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <h2 className="text-3xl font-bold text-slate-900">Privacy Policy</h2>
                        </div>
                        <div className="flex items-center mb-6">
                            <strong className="mr-2 text-slate-700">Effective Date:</strong>
                            <p className="text-slate-600">04/25/2024</p>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Brite Lighting LLC: DBA Brite Exterior Services ("we," "us," or "our") is
                            committed to protecting the privacy of our customers ("you" or "your"). This
                            Privacy Policy explains how we collect, use, disclose, and protect your
                            information when you engage with us through text messages, phone calls, and
                            emails. By using our services, you consent to the practices described in this
                            Privacy Policy.
                        </p>
                    </section>
                    {/* INFORMATION WE COLLECT  */}
                    <section className="mb-12" id="information-we-collect">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">1. Information We Collect</h2>
                        </div>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            We may collect the following types of information from you:
                        </p>
                        
                        {/* PERSONAL INFORMATION */}
                        <div className="bg-slate-50 rounded-xl p-6 mb-6" id="personal-information">
                            <h3 className="font-bold text-xl text-slate-900 mb-4">1.1 Personal Information:</h3>
                            <ul className="space-y-3">
                                <li className="flex flex-col">
                                    <strong className="text-slate-800 mb-1">Contact Information:</strong>
                                    <p className="text-slate-600">Name, phone number, email address, and mailing address.</p>
                                </li>
                            </ul>
                        </div>
                        
                        {/* USAGE INFORMATION */}
                        <div className="bg-slate-50 rounded-xl p-6" id="usage-information">
                            <h3 className="font-bold text-xl text-slate-900 mb-4">1.2 Usage Information:</h3>
                            <ul className="space-y-3">
                                <li className="flex flex-col">
                                    <strong className="text-slate-800 mb-1">Interaction Data:</strong>
                                    <p className="text-slate-600">
                                        Details about how you interact with our communications, including
                                        date, time, and content of text messages, phone calls, and emails.
                                    </p>
                                </li>
                                <li className="flex flex-col">
                                    <strong className="text-slate-800 mb-1">Device Information:</strong>
                                    <p className="text-slate-600">
                                        Information about the device you use to communicate with us, such
                                        as your phone's operating system, browser type, and IP address.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    {/* HOW WE USE YOUR INFORMATION */}
                    <section className="mb-12" id="how-we-use-your-information">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">2. How We Use Your Information</h2>
                        </div>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            We use the information we collect for the following purposes:
                        </p>
                        
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* COMMUNICATION */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-xl text-slate-900 mb-4">2.1 Communication</h3>
                                <ul className="space-y-2">
                                    <li className="text-slate-600">
                                        To send you updates, promotional offers, and other information via
                                        text, phone call, or email based on your preferences.
                                    </li>
                                    <li className="text-slate-600">
                                        To respond to your inquiries and provide customer support.
                                    </li>
                                </ul>
                            </div>
                            
                            {/* PERSONALIZATION */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-xl text-slate-900 mb-4">2.2 Personalization</h3>
                                <ul className="space-y-2">
                                    <li className="text-slate-600">
                                        To tailor our communications and offers to your interests and
                                        preferences.
                                    </li>
                                </ul>
                            </div>
                            
                            {/* COMPLIANCE */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-xl text-slate-900 mb-4">2.3 Compliance</h3>
                                <ul className="space-y-2">
                                    <li className="text-slate-600">
                                        To comply with legal obligations and enforce our terms and
                                        conditions.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* HOW WE SHARE YOUR INFORMATION */}
                    <section className="mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">3. How We Share Your Information</h2>
                        </div>
                        <p className="text-slate-600 mb-8 leading-relaxed">We may share your information with:</p>
                        
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* SERVICE PROVIDERS */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-xl text-slate-900 mb-4">3.1 Service Providers</h3>
                                <p className="text-slate-600">
                                    Third-party vendors who assist us in delivering our services,
                                    including communication platforms, analytics providers, and
                                    marketing partners.
                                </p>
                            </div>
                            
                            {/* LEGAL OBLIGATIONS */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-xl text-slate-900 mb-4">3.2 Legal Obligations</h3>
                                <p className="text-slate-600">
                                    When required by law, or to protect the rights, property, or
                                    safety of Brite Exterior Services, our customers, or others.
                                </p>
                            </div>
                            
                            {/* BUSINESS TRANSFERS */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-xl text-slate-900 mb-4">3.3 Business Transfers</h3>
                                <p className="text-slate-600">
                                    In connection with a merger, acquisition, or sale of all or part
                                    of our assets.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    {/* YOUR CHOICES */}
                    <section className="mb-12" id="your-choices">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">4. Your Choices</h2>
                        </div>
                        
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* OPT OUT */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-xl text-slate-900 mb-4">4.1 Opt-Out</h3>
                                <p className="text-slate-600">
                                    You can opt out of receiving promotional communications from us at
                                    any time by following the instructions in those communications or by
                                    contacting us directly.
                                </p>
                            </div>
                            
                            {/* ACCESS AND CORRECTION */}
                            <div className="bg-slate-50 rounded-xl p-6">
                                <h3 className="font-bold text-xl text-slate-900 mb-4">4.2 Access and Correction</h3>
                                <p className="text-slate-600">
                                    You have the right to access, correct, or delete your personal
                                    information. To exercise these rights, please contact us using the
                                    information provided below.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    {/* SECURITY */}
                    <section className="mb-12" id="security">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">5. Security</h2>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6">
                            <p className="text-slate-600 leading-relaxed">
                                We take reasonable measures to protect your information from unauthorized
                                access, use, or disclosure. However, no method of transmission over the Internet
                                or method of electronic storage is 100% secure, and we cannot guarantee absolute
                                security.
                            </p>
                        </div>
                    </section>
                    
                    {/* CHILDREN'S PRIVACY */}
                    <section className="mb-12" id="childrens-privacy">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">6. Children's Privacy</h2>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6">
                            <p className="text-slate-600 leading-relaxed">
                                Our services are not intended for individuals under the age of 13, and we do not
                                knowingly collect personal information from children under 13. If we become
                                aware that we have collected such information, we will take steps to delete it.
                            </p>
                        </div>
                    </section>
                    
                    {/* CHANGES TO THIS PRIVACY POLICY */}
                    <section className="mb-12" id="changes-to-this-privacy-policy">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">7. Changes to This Privacy Policy</h2>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6">
                            <p className="text-slate-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any
                                significant changes by posting the new Privacy Policy on our website and, where
                                appropriate, contacting you directly.
                            </p>
                        </div>
                    </section>
                    
                    {/* CONTACT US */}
                    <section className="mb-12" id="contact-us">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                            <h2 className="text-3xl font-bold text-slate-900">8. Contact Us</h2>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-6">
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                If you have any questions or concerns about this Privacy Policy or our
                                practices, please contact us at:
                            </p>
                            <div className="space-y-3">
                                <p className="font-semibold text-slate-800">Brite Exterior Services</p>
                                <address className="text-slate-600">10130 Mallard Creek Rd. Suite 300 Charlotte, NC 28262</address>
                                <Link
                                    className="block text-blue-600 hover:text-blue-800 underline underline-offset-2"
                                    href={"mailto:nick.walker@briteclt.com"}
                                >
                                    nick.walker@briteclt.com
                                </Link>
                                <Link 
                                    className="block text-blue-600 hover:text-blue-800 underline underline-offset-2" 
                                    href={"tel:7048423535"}
                                >
                                    704-842-3535
                                </Link>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;

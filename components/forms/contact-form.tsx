"use client";

import Image from "next/image";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import Logo from "@/public/assets/icons/brite-logo.png";
import HandyMan from "@/public/assets/imgs/handyman.webp";

import AuthorizationCheckbox from "./components/authorization-checkbox";
import ConfirmationModal from "../modals/confirmation-modal";
import SuccessModal from "../modals/success-modal";
import { Loader } from "../loader";
import { ServicesList, ReferralSources } from "../../lib/constants";
import Dropdown from "./components/dropdown";
import sendEmail from "@/lib/email-service";
import Input from "./components/input";
import Textarea from "../inputs/Textarea";

type FormValues = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    address: string;
    service: string;
    comment: string;
    referralSource: string;
};

const ContactFormOverlay = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const [estimateSuccess, setEstimateSuccess] = useState(false);
    const [estimateFail, setEstimateFail] = useState(false);
    const [loading, setLoading] = useState(false);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY as string;
    const PRIVATE_KEY = process.env.NEXT_PRIVATE_EMAILJS_KEY as string;

    const {
        handleSubmit,
        getValues,
        control,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setLoading(true);

        setIsOpen(true); // Show confirmation modal

        setLoading(false);
    };

    const confirmEstimate = () => {
        setLoading(true);

        const templateParams = {
            firstName: getValues("firstName"),
            lastName: getValues("lastName"),
            phone: getValues("phone"),
            email: getValues("email"),
            address: getValues("address"),
            service: getValues("service"),
            comment: getValues("comment"),
            referralSource: getValues("referralSource"),
        };

        sendEmail(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY, PRIVATE_KEY)
            .then(({ success }) => {
                setEstimateSuccess(success);
                setEstimateFail(!success);
                setIsOpen(false); // Close confirmation modal
            })
            .catch(() => setEstimateFail(true))
            .finally(() => setLoading(false));
    };

    return (
        <section
            id="contact-form-overlay"
            className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
        >
            {isOpen && (
                <ConfirmationModal
                    confirmEstimate={confirmEstimate}
                    isOpen={isOpen}
                    closeModal={() => setIsOpen(false)}
                />
            )}
            {estimateSuccess && (
                <SuccessModal
                    title="Estimate Request Successful"
                    description="Your Estimate Request has been successfully submitted."
                    isOpen={estimateSuccess}
                    closeModal={() => setEstimateSuccess(false)}
                />
            )}
            {estimateFail && (
                <SuccessModal
                    title="Estimate Request Failed"
                    description="Your Estimate Request submission failed. Please try again."
                    isOpen={estimateFail}
                    closeModal={() => setEstimateFail(false)}
                />
            )}
            {loading && <Loader />}
            
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
            </div>

            {/* Handyman Image - Hidden on smaller screens */}
            <div className="absolute hidden top-[250px] left-20 2xl:flex pointer-events-none">
                <Image loading="eager" src={HandyMan} alt="Handyman" className="opacity-80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-grotesk">
                        {pathname === "/contact-us" ? "Get In Touch" : "Get Your Free Estimate"}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Fill out the form below and we'll get back to you within 24 hours
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 sm:p-12">
                        {/* Logo */}
                        <div className="flex justify-center mb-8">
                            <Image loading="eager" width={100} src={Logo} alt="Brite Logo" />
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            {/* Contact Info Section */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-grotesk">
                                    Contact Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Input
                                            inputName="firstName"
                                            inputLabel="First Name"
                                            placeholder="First Name*"
                                            control={control}
                                            errors={errors}
                                            validationRules={{ required: "First Name is required" }}
                                        />
                                        <Input
                                            inputName="lastName"
                                            inputLabel="Last Name"
                                            placeholder="Last Name*"
                                            control={control}
                                            errors={errors}
                                            validationRules={{ required: "Last Name is required" }}
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <Input
                                            inputName="phone"
                                            inputLabel="Phone Number"
                                            placeholder="Phone Number*"
                                            control={control}
                                            errors={errors}
                                            validationRules={{ required: "Phone number is required" }}
                                        />
                                        <Input
                                            inputName="email"
                                            inputLabel="Email"
                                            placeholder="Email*"
                                            control={control}
                                            errors={errors}
                                            validationRules={{ required: "Email is required" }}
                                        />
                                    </div>
                                    <Input
                                        inputName="address"
                                        inputLabel="Address"
                                        placeholder="Address*"
                                        control={control}
                                        errors={errors}
                                        validationRules={{ required: "Address is required" }}
                                    />
                                </div>
                            </div>

                            {/* Service Details Section */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-grotesk">
                                    Service Details
                                </h3>
                                <div className="space-y-4">
                                    <Dropdown
                                        errors={errors}
                                        inputName="service"
                                        inputLabel="Choose Service:"
                                        control={control}
                                        options={ServicesList}
                                        textColor="dark"
                                    />
                                    <Dropdown
                                        inputName="referralSource"
                                        inputLabel="How Did You Hear About Us?"
                                        control={control}
                                        errors={errors}
                                        options={ReferralSources}
                                        textColor="dark"
                                    />
                                    <Textarea
                                        inputName="comment"
                                        inputLabel="Additional Comments"
                                        placeholder="Tell us more about your project..."
                                        control={control}
                                    />
                                </div>
                            </div>

                            <AuthorizationCheckbox inputName="authorization" control={control} />
                            
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                    sx={{ 
                                        textTransform: 'none',
                                        fontSize: '1.125rem',
                                        fontWeight: 700,
                                        py: 2
                                    }}
                                >
                                    Submit Request
                                </Button>
                            </motion.div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactFormOverlay;
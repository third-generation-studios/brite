import BasicInput from "@/components/inputs/BasicInput";
import { useUser } from "@clerk/nextjs";
import React from "react";

const ContactDetails = () => {
    const user = useUser().user!;

    // Check if user is defined before accessing its properties
    const fullName = user?.fullName || "";
    const emailAddresses = user?.emailAddresses || [];
    const phoneNumbers = user?.phoneNumbers || [];

    const renderEmailAddresses = () => {
        return emailAddresses.map((item, index) => {
            return (
                <div key={index}>
                    <label className="underline underline-offset-2" htmlFor="email-address">
                        Email Addresses
                    </label>
                    <BasicInput key={index} inputValue={item.emailAddress} />
                </div>
            );
        });
    };
    const renderPhoneNumbers = () => {
        return phoneNumbers.map((item, index) => {
            return (
                <div key={index}>
                    <label className="underline underline-offset-2" htmlFor="email-address">
                        Phone Numbers
                    </label>
                    <BasicInput key={index} inputValue={item.phoneNumber} />
                </div>
            );
        });
    };

    return (
        <div className="flex flex-col relative flex-1">
            {/* TITLE */}
            <h5 className="flex flex-1 h-full w-full text-3xl p-4">Contact Details</h5>
            {/* CONTENT */}
            <div className="mx-10">
                {/* NAME */}
                <div>
                    <label className="underline underline-offset-2" htmlFor="email-address">
                        Full Name
                    </label>
                    <BasicInput inputValue={fullName} />
                </div>
                {/* EMAIL ADDRESSES */}
                {renderEmailAddresses()}
                {/* PHONE NUMBERS */}
                {renderPhoneNumbers()}
            </div>
        </div>
    );
};

export default ContactDetails;

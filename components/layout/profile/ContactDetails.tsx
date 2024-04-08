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
            if (index === 0) {
                return (
                    <BasicInput
                        key={index}
                        label="Primary Email Address"
                        inputValue={item.emailAddress}
                    />
                );
            } else if (index === 1) {
                return (
                    <BasicInput
                        key={index}
                        label="Other Email Addresses"
                        inputValue={item.emailAddress}
                    />
                );
            } else {
                return <BasicInput key={index} inputValue={item.emailAddress} />;
            }
        });
    };
    const renderPhoneNumbers = () => {
        return phoneNumbers.map((item, index) => {
            if (index === 0) {
                return (
                    <BasicInput
                        key={index}
                        label="Primary Phone Number"
                        inputValue={item.phoneNumber}
                    />
                );
            } else if (index === 1) {
                return (
                    <BasicInput
                        key={index}
                        label="Other Phone Numbers"
                        inputValue={item.phoneNumber}
                    />
                );
            } else {
                return <BasicInput key={index} inputValue={item.phoneNumber} />;
            }
        });
    };

    return (
        <div className="flex flex-col relative flex-1">
            {/* TITLE */}
            <h5 className="flex flex-1 h-full w-full text-3xl p-4">Contact Details</h5>
            {/* CONTENT */}
            <div>
                {/* NAME */}
                <BasicInput label="Full Name" inputValue={fullName} />
                {/* EMAIL ADDRESSES */}
                {renderEmailAddresses()}
            </div>
        </div>
    );
};

export default ContactDetails;

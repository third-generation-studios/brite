import React from "react";

import "../../../globals.css";
import ContactFormContainer from "../../../../components/contact-form-section/ContactFormContainer";

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex flex-col items-center h-full">
            {children}
            <ContactFormContainer />
        </div>
    );
}

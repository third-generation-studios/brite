"use client";

import { useUser } from "@clerk/nextjs";
import React from "react";
import PageBanner from "./PageBanner";

const PageBannerContainer = () => {
    const role = useUser().user?.organizationMemberships! || [];

    return role.toString() === "admin" ? <div></div> : <PageBanner title="FAQs" />;
};

export default PageBannerContainer;

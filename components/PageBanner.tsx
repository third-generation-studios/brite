import React from "react";

interface IPageBannerProps {
    title: string;
}

const PageBanner = (props: IPageBannerProps) => {
    return (
        <h5 className="text-[60px] text-white tracking-wider pl-6 bg-blue-600 py-4 md:py-24">
            {props.title}
        </h5>
    );
};

export default PageBanner;

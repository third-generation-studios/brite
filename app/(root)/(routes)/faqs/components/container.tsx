import React from "react";

interface IFAQContainerProps {
    title: string;
    children: React.ReactNode;
    id: string;
}

const FAQContainer = (props: IFAQContainerProps) => {
    return (
        <div id={props.id} className="flex flex-col w-full flex-1 mb-16">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <h2 className="text-3xl font-bold text-white">{props.title}</h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
                {props.children}
            </div>
        </div>
    );
};

export default FAQContainer;

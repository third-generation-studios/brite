import React from "react";

interface IFAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = (props: IFAQItemProps) => {
    return (
        <div className="flex flex-col border-b border-slate-200 w-full mb-8 pb-8 last:border-b-0 last:mb-0 last:pb-0">
            <h5 className="text-slate-900 my-4 text-xl font-bold">{props.question}</h5>
            <p className="text-slate-600 leading-relaxed">{props.answer}</p>
        </div>
    );
};

export default FAQItem;

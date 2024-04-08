import React from "react";

interface IItemCardProps {
    icon: React.ReactNode;
    title: string;
    selected: boolean;
    onClick: () => void;
}

const ItemCard = (props: IItemCardProps) => {
    return (
        <button
            aria-label={props.title}
            onClick={props.onClick}
            className={`${
                props.selected ? "bg-black text-white" : "bg-white text-black"
            } flex cursor-pointer items-center justify-start rounded-lg my-1 py-2 pl-4 pr-12 font-light text-md self-center w-full md:w-[400px] lg:w-full lg:py-4`}
        >
            {/* ICON */}
            <span className="mr-4">{props.icon}</span>
            {/* TITLE */}
            <p>{props.title}</p>
        </button>
    );
};

export default ItemCard;

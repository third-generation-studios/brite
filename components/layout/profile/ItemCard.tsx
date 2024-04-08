import React from "react";

interface IItemCardProps {
    icon: React.ReactNode;
    title: string;
    selected: boolean;
    onClick: () => void;
}

const ItemCard = (props: IItemCardProps) => {
    return (
        <div
            onClick={props.onClick}
            className={`${
                props.selected ? "bg-black text-white" : "bg-white text-black"
            } flex cursor-pointer items-center justify-start rounded-lg my-1 py-4 pl-4 pr-12 font-light text-md`}
        >
            {/* ICON */}
            <span className="mr-4">{props.icon}</span>
            {/* TITLE */}
            <p>{props.title}</p>
        </div>
    );
};

export default ItemCard;

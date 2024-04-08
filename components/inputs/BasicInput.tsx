"use client";

import React, { useState } from "react";

import { TfiPencilAlt } from "react-icons/tfi";

interface IBasicInputProps {
    inputValue: string;
    label?: string;
}

const BasicInput = (props: IBasicInputProps) => {
    const [editting, setEditting] = useState(false);
    const [confirmEdit, setConfirmEdit] = useState(false);
    const [inputValue, setInputValue] = useState(props.inputValue);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleConfirmEdit = () => {
        setEditting(false);
        setConfirmEdit(true);
    };

    return (
        <div className="flex flex-col ml-10">
            {props.label && (
                <label
                    className="underline underline-offset-2"
                    htmlFor="name"
                >{`${props.label}:`}</label>
            )}
            <div className="flex items-center">
                <input
                    onChange={handleInputChange}
                    readOnly={!editting}
                    className="bg-transparent text-black mx-4 p-2"
                    type="text"
                    value={props.inputValue}
                />
                <span>
                    <TfiPencilAlt className="cursor-pointer" onClick={() => setEditting(true)} />
                </span>
            </div>
            {editting && (
                <button
                    onClick={() => handleConfirmEdit()}
                    className="my-2 justify-center flex text-center items-center bg-blue-500 rounded-lg text-white w-[200px]"
                >
                    Confirm
                </button>
            )}
        </div>
    );
};

export default BasicInput;

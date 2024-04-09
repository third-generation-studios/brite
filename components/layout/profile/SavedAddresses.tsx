"use client";

import BasicInput from "@/components/inputs/BasicInput";
import { AddressType } from "@/lib/types";
import React, { useState, useEffect } from "react";

const SavedAddresses = () => {
    const [addresses, setAddresses] = useState<AddressType[]>([]);

    useEffect(() => {
        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {
            const response = await fetch("/api/addresses"); // Replace '/api/addresses' with your actual API endpoint
            if (!response.ok) {
                throw new Error("Failed to fetch addresses");
            }
            const data = await response.json();
            setAddresses(data.addresses); // Assuming the response data has a field named 'addresses' containing the array of addresses
        } catch (error) {
            console.error("Error fetching addresses:");
        }
    };

    const renderAddresses = () => {
        if (addresses.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center p-4 border-b border-gray-200">
                    <p className="text-lg">There are no Addresses saved</p>
                    <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Add Address
                    </button>
                </div>
            );
        } else {
            return addresses.map((address, index) => {
                if (index === 0) {
                    return (
                        <div>
                            <label className="undelrine underline-offset-2" htmlFor="address">
                                Addresses
                            </label>
                            <BasicInput inputValue={address.street} />
                            <BasicInput inputValue={address.city} />
                            <BasicInput inputValue={address.state} />
                            <BasicInput inputValue={address.zipCode} />
                        </div>
                    );
                }
            });
        }
    };

    return (
        <div className="flex flex-col relative flex-1">
            {/* TITLE */}
            <h5 className="flex flex-1 h-full w-full text-3xl p-4">Saved Addresses</h5>
            {/* CONTENT */}
            <div>
                {/* SAVED ADDRESSES */}
                {renderAddresses()}
            </div>
        </div>
    );
};

export default SavedAddresses;

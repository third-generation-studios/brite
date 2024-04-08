"use client";

import React, { useState } from "react";
import { useClerk } from "@clerk/nextjs";

import { GrContactInfo } from "react-icons/gr";
import { MdShareLocation } from "react-icons/md";

import { ProfileNav, ProfileNavMenu } from "@/lib/constants";
import ItemCard from "./ItemCard";
import { useRouter } from "next/navigation";
import ContactDetails from "./ContactDetails";
import SavedAddresses from "./SavedAddresses";

const Profile = () => {
    const [selected, setSelected] = useState<string>(ProfileNav.CONTACT);
    const { signOut } = useClerk();
    const router = useRouter();

    const getIcon = (item: string) => {
        switch (item) {
            case ProfileNav.ADDRESSES:
                return <MdShareLocation size={25} />;
            case ProfileNav.CONTACT:
                return <GrContactInfo size={25} />;
            default:
                null;
        }
    };

    const renderProfileContent = () => {
        if (selected === ProfileNav.CONTACT) {
            return <ContactDetails />;
        } else if (selected === ProfileNav.ADDRESSES) {
            return <SavedAddresses />;
        }
    };

    return (
        <div className="flex bg-zinc-300 items-center w-full">
            {/* NAV */}
            <div className="bg-zinc-500 h-full p-4 md:w-max">
                {ProfileNavMenu.map((item) => {
                    return (
                        <ItemCard
                            icon={getIcon(item.title)}
                            title={item.title}
                            selected={selected === item.title}
                            onClick={() => setSelected(item.title)}
                        />
                    );
                })}
                <div>
                    <button
                        className="flex justify-center p-2 bg-black text-white mt-20 w-full rounded-lg"
                        onClick={() => signOut(() => router.push("/"))}
                    >
                        Sign out
                    </button>
                </div>
            </div>
            {/* PROFILE CONTENT */}
            <div className="flex w-full h-full flex-1">{renderProfileContent()}</div>
        </div>
    );
};

export default Profile;

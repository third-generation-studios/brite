"use client";

import React, { useState } from "react";

import { GrContactInfo } from "react-icons/gr";
import { MdShareLocation } from "react-icons/md";

import { ProfileNav, ProfileNavMenu } from "@/lib/constants";
import ItemCard from "./ItemCard";
import ContactDetails from "./ContactDetails";
import SavedAddresses from "./SavedAddresses";
import SignOutBtn from "@/components/SignOutBtn";

const Profile = () => {
    const [selected, setSelected] = useState<string>(ProfileNav.CONTACT);

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
        <div className="flex bg-zinc-300 w-full flex-col lg:flex-row">
            {/* NAV */}
            <nav className="bg-zinc-500 h-full p-4 flex flex-col w-full lg:w-[300px]">
                {ProfileNavMenu.map((item, index) => {
                    return (
                        <ItemCard
                            key={index}
                            icon={getIcon(item.title)}
                            title={item.title}
                            selected={selected === item.title}
                            onClick={() => setSelected(item.title)}
                        />
                    );
                })}
                {/* SIGN OUT BTN 1 */}
                <div>
                    <SignOutBtn hiddenOnMobile />
                </div>
            </nav>
            {/* PROFILE CONTENT */}
            <section className="flex w-full h-full flex-1">{renderProfileContent()}</section>
            {/* SIGN OUT BTN 1 */}
            <aside className="w-full my-4 px-10 md:px-0 md:w-[400px]">
                <SignOutBtn hiddenOnMobile={false} />
            </aside>
        </div>
    );
};

export default Profile;

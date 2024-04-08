"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

interface ISignOutBtnProps {
    hiddenOnMobile: boolean;
}

const SignOutBtn = (props: ISignOutBtnProps) => {
    const { signOut } = useClerk();
    const router = useRouter();
    return (
        <button
            className={`${
                props.hiddenOnMobile ? "hidden lg:flex" : "flex lg:hidden"
            } justify-center p-2 bg-black text-white mt-20 w-full rounded-lg flex`}
            onClick={() => signOut(() => router.push("/"))}
        >
            Sign out
        </button>
    );
};

export default SignOutBtn;

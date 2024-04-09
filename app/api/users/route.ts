import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { UserType } from "@/lib/types";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        // Retrieve all songs from the database
        const users = await prisma.user.findMany();

        return NextResponse.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const {
            primaryPhoneNumber,
            phoneNumbers,
            primaryEmailAddress,
            emailAddresses,
            name,
            img,
            purchases,
            wishlist,
            discounts,
            role,
            addresses,
        }: UserType = await request.json();

        const adminEmails = [
            "adrianhenry2115@gmail.com",
            "joey.mckenna@britellc.com",
            "nick.walker@britellc.com",
        ];

        // Check if a user with the provided email address or phone number already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { primaryEmailAddress: primaryEmailAddress },
                    { primaryPhoneNumber: primaryPhoneNumber },
                ],
            },
        });

        if (existingUser) {
            // If user with the provided email address or phone number already exists, return a response indicating it
            return NextResponse.json(
                { message: "User with the provided email address or phone number already exists" },
                { status: 400 }
            );
        } else {
            const isAdmin = adminEmails.includes(primaryEmailAddress);
            // Create the song in the database
            const createdUser = await prisma.user.create({
                data: {
                    primaryPhoneNumber,
                    phoneNumbers,
                    primaryEmailAddress,
                    emailAddresses,
                    name,
                    img,
                    purchases,
                    wishlist,
                    discounts,
                    role: isAdmin ? "admin" : role,
                    addresses,
                },
            });

            return NextResponse.json(createdUser);
        }
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

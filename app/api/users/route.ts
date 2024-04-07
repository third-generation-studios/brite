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
            phone,
            email,
            name,
            img,
            purchases,
            wishlist,
            discounts,
            role,
            addresses,
        }: UserType = await request.json();

        // Create the song in the database
        const createdUser = await prisma.user.create({
            data: {
                phone,
                email,
                name,
                img,
                purchases,
                wishlist,
                discounts,
                role,
                addresses,
            },
        });

        return NextResponse.json(createdUser);
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

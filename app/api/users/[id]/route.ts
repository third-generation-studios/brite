import { PrismaClient } from "@prisma/client";
import { UserType } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Get a single user by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Retrieve the user from the database
        const user = await prisma.user.findUnique({
            where: {
                id: params.id as string,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 405 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({ error: "Failed to fetch user" }, { status: 400 });
    }
}

// Delete an existing user by ID
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Delete the user from the database
        await prisma.user.delete({
            where: {
                id: params.id,
            },
        });

        return NextResponse.json("User deleted successfully"); // No content response
    } catch (error) {
        console.error("Error deleting user:", error);
        return NextResponse.json({ error: "Failed to delete user" }), { status: 500 };
    }
}

// Update an existing user by ID
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
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

        // Check if the user exists
        const existingUser = await prisma.user.findUnique({
            where: {
                id: params.id,
            },
        });

        if (!existingUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Update the user in the database
        const updateduser = await prisma.user.update({
            where: {
                id: params.id,
            },
            data: {
                phone: phone ?? existingUser.phone,
                email: email ?? existingUser.email,
                name: name ?? existingUser.name,
                img: img ?? existingUser.img,
                purchases: purchases ?? existingUser.purchases,
                wishlist: wishlist ?? existingUser.wishlist,
                discounts: discounts ?? existingUser.discounts,
                role: role ?? existingUser.role,
                addresses: addresses ?? existingUser.addresses,
            },
        });

        return NextResponse.json(updateduser);
    } catch (error) {
        console.error("Error updating user:", error);
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
}

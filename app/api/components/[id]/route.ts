import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { ComponentType } from "@/lib/types";

const prisma = new PrismaClient();

// Get a single component by ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Retrieve the component from the database
        const component = await prisma.component.findUnique({
            where: {
                id: params.id as string,
            },
        });

        if (!component) {
            return NextResponse.json({ error: "Component not found" }, { status: 405 });
        }

        return NextResponse.json(component);
    } catch (error) {
        console.error("Error fetching component:", error);
        return NextResponse.json({ error: "Failed to fetch component" }, { status: 400 });
    }
}

// Delete an existing component by ID
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Delete the component from the database
        await prisma.component.delete({
            where: {
                id: params.id,
            },
        });

        return NextResponse.json("Component deleted successfully"); // No content response
    } catch (error) {
        console.error("Error deleting component:", error);
        return NextResponse.json({ error: "Failed to delete component" }), { status: 500 };
    }
}

// Update an existing component by ID
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const {
            title,
            content,
            author,
            img,
            nav_page,
            is_active,
            background_color,
            text_color,
            link,
            type,
            tags,
        }: ComponentType = await request.json();

        // Check if the component exists
        const existingComponent = await prisma.component.findUnique({
            where: {
                id: params.id,
            },
        });

        if (!existingComponent) {
            return NextResponse.json({ error: "Component not found" }, { status: 404 });
        }

        // Update the component in the database
        const updatedComponent = await prisma.component.update({
            where: {
                id: params.id,
            },
            data: {
                title: title ?? existingComponent.title,
                content: content ?? existingComponent.content,
                author: author ?? existingComponent.author,
                img: img ?? existingComponent.img,
                nav_page: nav_page ?? existingComponent.nav_page,
                is_active: is_active ?? existingComponent.is_active,
                background_color: background_color ?? existingComponent.background_color,
                text_color: text_color ?? existingComponent.text_color,
                link: link ?? existingComponent.link,
                type: type ?? existingComponent.type,
                tags: tags ?? existingComponent.tags,
            },
        });

        return NextResponse.json(updatedComponent);
    } catch (error) {
        console.error("Error updating component:", error);
        return NextResponse.json({ error: "Failed to update component" }, { status: 500 });
    }
}

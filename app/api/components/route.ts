import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { ComponentType } from "@/lib/types";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        // Retrieve all songs from the database
        const components = await prisma.component.findMany();

        return NextResponse.json(components);
    } catch (error) {
        console.error("Error fetching components:", error);
        return NextResponse.json({ error: "Failed to fetch components" }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
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

        // Create the song in the database
        const createdComponent = await prisma.component.create({
            data: {
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
            },
        });

        return NextResponse.json(createdComponent);
    } catch (error) {
        console.error("Error creating component:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

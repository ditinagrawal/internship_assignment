import conn from "@/db";
import Course from "@/db/models/courses.model";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const { id } = await req.json();
    await conn();
    try {
        const course = await Course.findById(id);
        return new NextResponse(JSON.stringify([course]), { status: 200 });
    } catch (error) {
        return new NextResponse(`Error fetching course ${error}`, {
            status: 500,
        });
    }
};

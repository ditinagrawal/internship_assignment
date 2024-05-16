import conn from "@/db";
import Course from "@/db/models/courses.model";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    await conn();
    const body = await req.json();
    try {
        const newCourse = new Course(body);
        await newCourse.save();
        return new NextResponse("Course created successfully", { status: 201 });
    } catch (error) {
        return new NextResponse(`Error creating course ${error}`, {
            status: 500,
        });
    }
};

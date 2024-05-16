import conn from "@/db";
import Course from "@/db/models/courses.model";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    await conn();
    try {
        const courses = await Course.find();
        return new NextResponse(JSON.stringify(courses), { status: 200 });
    } catch (error) {
        return new NextResponse("Error", { status: 500 });
    }
};

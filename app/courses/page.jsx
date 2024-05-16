"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const page = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const getAllCourses = async () => {
            const res = await axios.get("/api/getcourses");
            setCourses(res.data);
            // console.log(res.data);
        };
        getAllCourses();
    }, []);
    return (
        <div className="w-[90%] mx-auto">
            <h2 className="text-3xl font-mono m-4">Our Premium Courses</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[200px]">Name</TableHead>
                        <TableHead>Instructor</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">
                            View Details
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {courses.map((course) => (
                        <TableRow key={course._id}>
                            <TableCell className="font-medium">
                                {course.name}
                            </TableCell>
                            <TableCell>{course.instructor}</TableCell>
                            <TableCell>{course.description}</TableCell>
                            <TableCell className="text-right">
                                <Link href={`/coursedetail/${course._id}`}>
                                    See Details
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default page;

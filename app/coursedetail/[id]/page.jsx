"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
    const { id } = useParams();
    const [course, setCourse] = useState([]);
    useEffect(() => {
        const getCourseDetail = async () => {
            const res = await axios.post("/api/getcoursedetail", { id });
            setCourse(res.data[0]);
            console.log(res.data);
        };
        getCourseDetail();
    }, []);
    return (
        <div className="font-mono">
            <h2 className="text-3xl my-4 ms-2">Course Details Page</h2>
            <div>
                <h2>
                    <strong>Title: </strong> {course.name}
                </h2>
                <p>
                    <strong>Description: </strong>
                    {course.description}
                </p>
                <p>
                    <strong>Instructor: </strong>
                    {course.instructor}
                </p>
                <p>
                    <strong>Enrollment Status: </strong>
                    {course.enrollmentStatus}
                </p>
                <p>
                    <strong>Duration: </strong>
                    {course.duration}
                </p>
                <p>
                    <strong>Schedule: </strong>
                    {course.schedule}
                </p>
                <p>
                    <strong>Location: </strong>
                    {course.location}
                </p>
                <ul>
                    <strong>Prerequisites: </strong>
                </ul>
                {course.prerequisites &&
                    course.prerequisites.map((prerequisite, index) => (
                        <li className="ms-6" key={index}>
                            {prerequisite}
                        </li>
                    ))}
                <ul>
                    <strong>Syllabus: </strong>
                </ul>
                {course.syllabus &&
                    course.syllabus.map((topic) => (
                        <div key={topic._id} className="w-1/4 ms-6">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>
                                        Week {topic.week}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p>Topic : {topic.topic}</p>
                                        <p>Content : {topic.content}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default page;

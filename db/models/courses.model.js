import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    enrollmentStatus: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    schedule: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    prerequisites: {
        type: [String],
        required: true,
    },
    syllabus: {
        type: [
            {
                week: Number,
                topic: String,
                content: String,
            },
        ],
        required: true,
    },
    students: {
        type: [
            {
                id: Number,
                name: String,
                email: String,
            },
        ],
        required: true,
    },
});

const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;

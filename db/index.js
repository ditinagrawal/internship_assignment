import mongoose from "mongoose";

const connState = mongoose.connection.readyState;

const conn = async () => {
    if (connState == 1) {
        console.log("Already connected to the database");
        return;
    }
    if (connState == 2) {
        console.log("Already connecting to the database");
        return;
    }
    await mongoose.connect(process.env.DATABASE_URI, {
        dbName: "courseDB",
        bufferCommands: false,
    });
};

export default conn;

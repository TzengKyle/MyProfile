import { Double, Int32, ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import connectMongoDB from "@/lib/mongodb";

const DB_NAME = "main-cluster"

const db = await connectMongoDB(DB_NAME)

const userSchema = new Schema(
    {
        name: {
            type: Number,
            required: true
        },
        email: {
            type: Number,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
    }
);

export const User = db.model("user", userSchema);


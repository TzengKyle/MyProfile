import { Double, Int32, ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import connectMongoDB from "@/lib/mongodb";

const DB_NAME = "main-cluster"

const db = await connectMongoDB(DB_NAME)

const commentSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    }
);

export const Comment = db.model("comment", commentSchema);
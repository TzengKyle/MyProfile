import { Double, Int32, ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";
import connectMongoDB from "@/lib/mongodb";

const DB_NAME = "main-cluster"

const db = await connectMongoDB(DB_NAME)

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    }
})

export const Todo = db.model('Todo', todoSchema)
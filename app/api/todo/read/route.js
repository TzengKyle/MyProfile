import { NextResponse } from "next/server";
import { Todo } from "@/lib/models/todo.model";

export async function GET() {
    const todos = await Todo.find();
    return NextResponse.json({ todos });
}
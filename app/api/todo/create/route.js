import { NextResponse } from "next/server";
import { Todo } from "@/lib/models/todo.model";

export async function POST(request) {
    const { title, text } = await request.json();
    await Todo.create({ title, text });
    return NextResponse.json({ message: "Todo Created" }, { status: 201 });
}
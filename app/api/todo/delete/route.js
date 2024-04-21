import { NextResponse } from "next/server";
import { Todo } from "@/lib/models/todo.model";

export async function POST(request) {
    const { _id } = await request.json();
    await Todo.findOneAndDelete({ _id: _id });
    return NextResponse.json({ message: "Todo Deleted" }, { status: 201 });
}
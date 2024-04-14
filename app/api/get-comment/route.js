import { NextResponse } from "next/server";
import { Comment } from "@/lib/models/comment.model";

export async function POST(request) {
    const { name, imgUrl, content } = await request.json();
    await Comment.create({ name, imgUrl, content });
    return NextResponse.json({ message: "Comment Created" }, { status: 201 });
}
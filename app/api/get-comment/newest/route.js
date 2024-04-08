import { NextResponse } from "next/server";
import { Comment } from "@/lib/models/comment.model";

export async function GET() {
    // 使用sort()方法按照日期字段降序排序，然後使用limit()方法選擇最新的五筆數據
    const comments = await Comment.find();
    // .sort({ timestamp: -1 }).limit(2);
    return NextResponse.json({ comments });
}

export async function POST(request) {
    const { name, imgUrl, content } = await request.json();
    await Comment.create({ name, imgUrl, content });
    return NextResponse.json({ message: "Comment Created" }, { status: 201 });
}
import { NextResponse } from "next/server";
import { User } from "@/lib/models/user.model";

export async function GET() {
    // 使用sort()方法按照日期字段降序排序，然後使用limit()方法選擇最新的五筆數據
    const users = await User.find();
    return NextResponse.json({ users });
}
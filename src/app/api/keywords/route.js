import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { keywordModel } from "@/models/keywordModel";
import { NextResponse } from "next/server";
import { URL } from "url"

export async function POST(req) {
    try {
        const data = await req.json();

        mongoose.connect(process.env.MONGODB_URI)

        const session = await getServerSession(authOptions);

        const createdKeyword = await keywordModel.create({
            domain: data?.domain,
            keyword: data?.keyword,
            owner: session?.user?.email
        });

        return NextResponse.json({ message: "Keyword added", result: createdKeyword }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET(req) {
    try {
        const url = new URL(req.url);

        const domain = url.searchParams.get("domain");

        mongoose.connect(process.env.MONGODB_URI)

        const keywords = await keywordModel.find({ domain: domain }).sort({ createdAt: -1 });

        return NextResponse.json({ message: "Keywords fetched", result: keywords }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function DELETE(req) {
    try {
        const url = new URL(req.url)

        const domain = url.searchParams.get("domain");
        const keyword = url.searchParams.get("keyword");

        mongoose.connect(process.env.MONGODB_URI)

        const session = await getServerSession(authOptions);

        await keywordModel.deleteOne({ domain: domain, keyword: keyword, owner: session?.user?.email })

        return NextResponse.json({ message: "Keyword deleted" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
import { domainModel } from "@/models/domainModel";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { URL } from "url"
import { keywordModel } from "@/models/keywordModel";

export async function POST(req) {
    try {
        const data = await req.json();

        mongoose.connect(process.env.MONGODB_URI)

        const session = await getServerSession(authOptions);

        const createdDomain = await domainModel.create({
            domainTitle: data?.domainTitle,
            owner: session?.user?.email
        });

        return NextResponse.json({ message: "Domain added", result: createdDomain }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function DELETE(req) {
    try {
        const url = new URL(req.url);

        const domain = url.searchParams.get("domain");

        mongoose.connect(process.env.MONGODB_URI)

        const deletedDomain = await domainModel.deleteOne({ domainTitle: domain });

        const session = await getServerSession(authOptions);

        await keywordModel.deleteMany({ domain: domain, owner: session?.user?.email })

        return NextResponse.json({ message: "Domain deleted", result: deletedDomain }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
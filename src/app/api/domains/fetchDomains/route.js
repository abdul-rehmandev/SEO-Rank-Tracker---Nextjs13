import { domainModel } from "@/models/domainModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {

        const data = await req.json();

        mongoose.connect(process.env.MONGODB_URI);

        const domains = await domainModel.find({ owner: data?.email }).sort({ createdAt: -1 });
        return NextResponse.json({ message: "Domains fetched", result: domains }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
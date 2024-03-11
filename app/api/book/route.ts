import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const result = await prisma.book.findMany();

		return NextResponse.json(result, { status: 200 });
	} catch (e) {
		return NextResponse.json({ error: e }, { status: 500 });
	}
}

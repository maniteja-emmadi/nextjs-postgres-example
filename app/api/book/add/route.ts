import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const values = await request.json();
		const result = await prisma.book.create({
			data: {
				name: values.name,
				title: values.title,
				description: values.description,
				author: values.author,
			},
		});
		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error: error }, { status: 500 });
	}
}

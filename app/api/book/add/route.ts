import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const values = await request.json();

		const existing = await prisma.book.findFirst({
			where: { OR: [{ title: values.title }, { name: values.name }] },
		});

		if (existing) {
			return NextResponse.json(
				{
					error: "Book already exists",
				},
				{ status: 400 }
			);
		}

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

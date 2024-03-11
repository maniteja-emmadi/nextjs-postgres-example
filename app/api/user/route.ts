import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const result = await sql`SELECT * FROM Users;`;

		return NextResponse.json(result?.rows, { status: 200 });
	} catch (e) {
		return NextResponse.json({ error: e }, { status: 500 });
	}
}

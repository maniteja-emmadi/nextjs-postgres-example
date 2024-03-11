import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

async function createUserTable() {
	try {
		// INSERT INTO Users (firstName, lastName, username, email, password) VALUES ("Maniteja", "Emmadi", "maniteja", "maniteja@test.com", "maniteja");
		// CREATE TABLE IF NOT EXISTS Users ( firstName varchar(255), lastName varchar(255), username varchar(255) NOT NULL UNIQUE, email varchar(255) NOT NULL UNIQUE, password varchar(255) NOT NULL, id INT SERIAL PRIMARY KEY );
		{
			/* CREATE TABLE IF NOT EXISTS Users (
      firstName VARCHAR(255),
      lastName VARCHAR(255),
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      id INT AUTO_INCREMENT PRIMARY KEY
    ); */
		}
		const result = await sql`CREATE TABLE IF NOT EXISTS Users (
      firstName VARCHAR(255),
      lastName VARCHAR(255),
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      id SERIAL PRIMARY KEY,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
		return { message: "User table created" };
	} catch (error) {
		return { error: error };
	}
}

export async function GET() {
	try {
		const result = await sql`SELECT * FROM Users;`;

		return NextResponse.json({ result }, { status: 200 });
	} catch (e) {
		return NextResponse.json({ error: e }, { status: 500 });
	}
}

export async function POST(request: Request) {
	try {
		const values = await request.json();

		const result = await createUserTable();

		try {
			const existingUser =
				await sql`SELECT * FROM Users WHERE email = ${values.email};`;

			if (existingUser?.rows.length > 0) {
				return NextResponse.json(
					{
						error: "User already exists",
					},
					{ status: 400 }
				);
			}

			try {
				const result =
					await sql`INSERT INTO Users (firstName, lastName, username, email, password) VALUES (${values.firstName}, ${values.lastName}, ${values.username}, ${values.email}, ${values.password});`;

				return NextResponse.json({ result }, { status: 200 });
			} catch (error) {
				if (error?.code === "23505") {
					return NextResponse.json(
						{
							error:
								"Username's already taken. Please choose a different username",
						},
						{ status: 400 }
					);
				}
				return NextResponse.json({ error }, { status: 500 });
			}
		} catch (e) {
			return NextResponse.json({ error: e }, { status: 500 });
		}
	} catch (e) {
		return NextResponse.json(
			{ error: JSON.stringify(e) || "Something went wrong" },
			{ status: 500 }
		);
	}
}

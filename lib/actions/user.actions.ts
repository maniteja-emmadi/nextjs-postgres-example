import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

const createUserTable = async () => {
	try {
		const result =
			await sql`CREATE TABLE Users ( firstName varchar(255), lastName varchar(255), username varchar(255) NOT NULL UNIQUE, email varchar(255) NOT NULL UNIQUE, password varchar(255) NOT NULL, id INT NOT NULL SERIAL PRIMARY KEY );`;
		return NextResponse.json({ result }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 500 });
	}
};

export const addUser = async (values: {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
}) => {
	try {
		const existingUser =
			await sql`SELECT * FROM Users WHERE email = ${values.email};`;

		try {
			if (existingUser?.rows.length > 0) {
				return NextResponse.json(
					{
						error: "User already exists",
					},
					{ status: 500 }
				);
			}

			const result =
				await sql`INSERT INTO Users (firstName, lastName, username, email, password) VALUES (${values.firstName}, ${values.lastName}, ${values.username}, ${values.email}, ${values.password});`;

			return NextResponse.json({ result }, { status: 200 });
		} catch (e) {
			console.log(e);
		}
	} catch (e) {
		console.log(e);
		await createUserTable();
		addUser(values);
	}
};

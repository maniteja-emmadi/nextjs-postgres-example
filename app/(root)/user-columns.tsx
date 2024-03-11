"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
	id: string;
	firstname: string;
	lastname: string;
	username: string;
	email: string;
	password: string;
};

export const columns: ColumnDef<User>[] = [
	{ accessorKey: "id", header: "ID" },
	{
		accessorKey: "firstname",
		header: "First Name",
	},
	{
		accessorKey: "lastname",
		header: "Last Name",
	},
	{
		accessorKey: "username",
		header: "Username",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
];

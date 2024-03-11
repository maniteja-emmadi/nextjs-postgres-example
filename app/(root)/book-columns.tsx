"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Book = {
	id: string;
	name: string;
	title: string;
	description: string;
	author: string;
};

export const columns: ColumnDef<Book>[] = [
	{ accessorKey: "id", header: "ID" },
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "title",
		header: "Title of the book",
	},
	{
		accessorKey: "description",
		header: "Description",
	},
	{
		accessorKey: "author",
		header: "Author",
	},
];

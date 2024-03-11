"use client";

import { useEffect, useState } from "react";
import { DataTable } from "../../components/shared/DataTable";
import { getAllBooks } from "@/lib/actions/book.actions";
import { columns as bookColumns } from "./book-columns";
import { getAllUsers } from "@/lib/actions/user.actions";
import { columns as userColumns } from "./user-columns";

export default function Home() {
	const [books, setBooks] = useState([]);
	const [users, setUsers] = useState([]);
	useEffect(() => {
		getAllBooks().then((res) => setBooks(res));
		getAllUsers().then((res) => setUsers(res));
	}, []);

	return (
		<main className="flex flex-col gap-4 justify-center items-center">
			<section className="book-table w-full lg:w-3/4 flex flex-col items-center">
				<DataTable columns={bookColumns} data={books} title="Books" />
			</section>
			<section className="user-table w-full lg:w-3/4 flex flex-col items-center">
				<DataTable columns={userColumns} data={users} title="Users" />
			</section>
		</main>
	);
}

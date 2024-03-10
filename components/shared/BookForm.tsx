"use client";

import React, { useState } from "react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { addUser } from "@/lib/actions/user.actions";
import { addBook } from "@/lib/actions/book.actions";

export const formSchema = z.object({
	name: z.string(),
	title: z.string(),
	description: z.string(),
	author: z.string(),
});

const BookForm = () => {
	const initialValues = {
		name: "",
		title: "",
		description: "",
		author: "",
	};
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { ...initialValues },
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleFormSubmit = async (data: z.infer<typeof formSchema>) => {
		setIsSubmitting(true);
		console.log(data);

		await addBook(data);

		setIsSubmitting(false);
	};

	return (
		<Form {...form}>
			<div className="flex justify-center">
				<form
					onSubmit={form.handleSubmit(handleFormSubmit)}
					className="space-y-8 w-1/2 "
				>
					<FormField
						control={form.control}
						name={"name"}
						render={({ field }) => (
							<FormItem className={"p-2"}>
								<FormLabel>Name of the book</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Name"
										className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent !important"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"title"}
						render={({ field }) => (
							<FormItem className={"p-2"}>
								<FormLabel>Title of the book</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Title"
										className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent !important"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"description"}
						render={({ field }) => (
							<FormItem className={"p-2"}>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Description"
										className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent !important"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"author"}
						render={({ field }) => (
							<FormItem className={"p-2"}>
								<FormLabel>Author</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Author"
										className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent !important"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-center w-full">
						<Button
							type="submit"
							className="capitalize"
							disabled={isSubmitting}
						>
							Add Book
						</Button>
					</div>
				</form>
			</div>
		</Form>
	);
};
export default BookForm;

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

export const formSchema = z
	.object({
		firstName: z.string(),
		lastName: z.string().optional(),
		username: z.string(),
		email: z.string().email(),
		password: z.string(),
	})
	.required({
		firstName: true,
		lastName: true,
		username: true,
		email: true,
		password: true,
	});

const UserForm = () => {
	const initialValues = {
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
	};
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { ...initialValues },
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleFormSubmit = async (data: z.infer<typeof formSchema>) => {
		setIsSubmitting(true);
		console.log(data);

		await addUser(data);

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
						name={"firstName"}
						render={({ field }) => (
							<FormItem className={"p-2"}>
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="First Name"
										className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent !important"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"lastName"}
						render={({ field }) => (
							<FormItem className={"p-2"}>
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Last Name"
										className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent !important"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"username"}
						render={({ field }) => (
							<FormItem className={"p-2"}>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Username"
										className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent !important"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"email"}
						render={({ field }) => (
							<FormItem className={"p-2"}>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Email"
										className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent !important"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name={"password"}
						render={({ field }) => (
							<FormItem className={"p-2"}>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="Password"
										className="rounded-[16px] border-2 border-purple-200/20 shadow-sm shadow-purple-200/15 text-dark-600 disabled:opacity-100 p-16-semibold h-[50px] md:h-[54px] focus-visible:ring-offset-0 px-4 py-3 focus-visible:ring-transparent !important"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-center w-full">
						<Button type="submit" className="capitalize">
							Add User
						</Button>
					</div>
				</form>
			</div>
		</Form>
	);
};
export default UserForm;

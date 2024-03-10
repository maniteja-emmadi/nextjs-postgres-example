export const addBook = async (values: {
	name: string;
	title: string;
	description: string;
	author: string;
}) => {
	try {
		const response = fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/book/add`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		});
	} catch (e) {
		console.log(e);
	}
};

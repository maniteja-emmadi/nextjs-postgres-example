export const addBook = async (values: {
	name: string;
	title: string;
	description: string;
	author: string;
}) => {
	try {
		const response = await fetch(`/api/book/add`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		}).then((res) => res.json());

		return response;
	} catch (e) {
		return JSON.parse(JSON.stringify(e));
	}
};

export const getAllBooks = async () => {
	try {
		const response = await fetch(`/api/book`).then((res) => res.json());

		return response;
	} catch (e) {
		return JSON.parse(JSON.stringify(e));
	}
};

export const addUser = async (values: {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
}) => {
	try {
		const result = await fetch(`/api/user/add`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		}).then((res) => res.json());

		return JSON.parse(JSON.stringify(result));
	} catch (e) {
		return JSON.parse(JSON.stringify(e));
	}
};

export const getAllUsers = async () => {
	try {
		const result = await fetch(`/api/user`).then((res) => res.json());

		return JSON.parse(JSON.stringify(result));
	} catch (e) {
		return JSON.parse(JSON.stringify(e));
	}
};

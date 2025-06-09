export const TEST_ACCOUNTS = {
	teacher: {
		email: "teacher@test.com",
		password: "teacher123",
		role: "teacher",
		name: "John Smith",
		subjects: ["English", "Grammar"],
		students: [
			{ id: 1, name: "Alice Johnson", level: "B1" },
			{ id: 2, name: "Bob Wilson", level: "A2" },
			{ id: 3, name: "Carol Brown", level: "B2" },
		],
	},
};

export const validateCredentials = (email, password) => {
	const account = Object.values(TEST_ACCOUNTS).find(
		(acc) => acc.email === email && acc.password === password
	);
	return account || null;
};

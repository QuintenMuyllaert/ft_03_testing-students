import expressApp from "../server";

// Test the same functionality as auth.test.js, but via our express server
// We'll have to make post requests
// Let's make a helper
const do_post = async (path, data) => {
	const response = await fetch(`http://localhost:9000${path}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	const text = await response.text();
	try {
		return JSON.parse(text);
	} catch (e) {
		return text;
	}
};

describe("Api register", () => {
	afterAll(() => {
		// Close our express app after were done, otherwise port will keep being in use next test
		// https://jestjs.io/docs/api#afterallfn-timeout
		expressApp.close();
	});

	it("Can register", async () => {
		const user = await do_post("/register", {
			username: "marty",
			password: "password123",
		});
		expect(user.username).toBe("marty");
	});

	it("Can't register same username twice", async () => {
		const err = await do_post("/register", {
			username: "marty",
			password: "password123",
		});
		expect(err).toBe("username already exists");
	});

	it("Can login", async () => {
		const token = await do_post("/login", {
			username: "marty",
			password: "password123",
		});
		expect(token).not.toBeNull();
	});

	// ...
});

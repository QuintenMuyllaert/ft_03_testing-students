// https://jestjs.io/docs/getting-started
// https://jestjs.io/docs/api

import { Register, Login } from "../auth";

describe("User flow", () => {
	it("Can register", () => {
		const user = Register("marty", "password123");
		expect(user.username).toBe("marty"); // https://jestjs.io/docs/expect
	});

	it("Can't register same username twice", () => {
		const err = Register("marty", "password123");
		expect(err).toBe("username already exists");
	});

	it("Can login", () => {
		const token = Login("marty", "password123");
		expect(token).not.toBeNull();
	});

	it("Can't login with wrong password", () => {
		const token = Login("marty", "password33");
		expect(token).toBe("could not login");
	});
});
describe("User flow EXTRA", () => {
	it("Verify JWT token", async () => {
		const token = Login("marty", "password123");

		const jsonwebtoken = await import("jsonwebtoken");
		const decoded = jsonwebtoken.verify(token, "secret");

		expect(decoded.username).toBe("marty");
	});
});

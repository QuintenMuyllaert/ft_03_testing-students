import expressApp from "../server";

// TODO: Test the same functionality as auth.test.js, but via our express server
// We'll have to make post requests
// Let's make a helper
const do_post = async (path, data) => {
	// ...
};

describe("Api register", () => {
	afterAll(() => {
		// Close our express app after were done, otherwise port will keep being in use next test
		// https://jestjs.io/docs/api#afterallfn-timeout
		expressApp.close();
	});

	it.todo("Can register");

	it.todo("Can't register same username twice");

	it.todo("Can login");

	// ...
});

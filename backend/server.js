import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { Register, Login } from "./auth.js";

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/", function (request, response) {
	response.send("Please use Vue app");
});

app.post("/register", function (request, response) {
	// return the result of Register called with the post data
	if (!request.body.username || !request.body.password) {
		response.status(400).send("Bad request");
		return;
	}

	response.send(Register(request.body.username, request.body.password));
});

app.post("/login", function (request, response) {
	// return the result of Login called with the post data
	if (!request.body.username || !request.body.password) {
		response.status(400).send("Bad request");
		return;
	}

	response.send(Login(request.body.username, request.body.password));
});

const port = 9000;
export default app.listen(port);
console.log(`Listening at http://localhost:${port}`);

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
	// TODO: return the result of Register called with the post data
});

app.post("/login", function (request, response) {
	// TODO: return the result of Login called with the post data
});

const port = 9000;
export default app.listen(port);
console.log(`Listening at http://localhost:${port}`);

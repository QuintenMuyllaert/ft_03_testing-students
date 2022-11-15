import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

const data = {
	users: [],
};

export const Register = (username, password) => {
	// implement logic to create a user object with hashed password
	// add it to "the users" if not already a user with the identifier
	// return the user object { username, password }
	// returning a password is not a good idea, I will not include it in the return value
	if (data.users.find((user) => user.username === username)) {
		return "username already exists";
	}

	const hashedPassword = bcrypt.hashSync(password, 8);
	const user = { username, password: hashedPassword };
	data.users.push(user);
	return { username };
};
export const Login = (username, password) => {
	// if user with these credentials exist, return a token
	// otherwise return an error ("could not login")
	const user = data.users.find((user) => user.username === username);
	if (!user) {
		return "could not login";
	}

	const validPassword = bcrypt.compareSync(password, user.password);
	if (!validPassword) {
		return "could not login";
	}

	const token = jsonwebtoken.sign({ username }, "secret", { expiresIn: "1h" });
	return token;
};

export const Delete = (username) => {
	// delete a user from "the users", return ok
	// if user does not exist, return error
	const user = data.users.find((user) => user.username === username);
	if (!user) {
		return "user does not exist";
	}

	data.users = data.users.filter((user) => user.username !== username);
	return "ok";
};

export default {
	Delete,
	Login,
	Register,
};

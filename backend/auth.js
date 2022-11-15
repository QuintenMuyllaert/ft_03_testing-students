import bcrypt from "bcryptjs";

const data = {
	users: [],
};

export const Register = (username, password) => {
	// TODO: implement logic to create a user object with hashed password
	// add it to "the users" if not already a user with the identifier
	// return the user object { username, password }
	if (data.users.find((user) => user.username === username)) {
		return "username already exists";
	}

	const hashedPassword = bcrypt.hashSync(password, 8);
	const user = { username, password: hashedPassword };
	data.users.push(user);
	return { username };
};
export const Login = (username, password) => {
	// TODO: if user with these credentials exist, return a token
	// otherwise return an error ("could not login")
	const user = data.users.find((user) => user.username === username);
	if (!user) {
		return "could not login";
	}

	const validPassword = bcrypt.compareSync(password, user.password);
	if (!validPassword) {
		return "could not login";
	}

	return "token";
};

export const Delete = (username) => {
	// TODO: delete a user from "the users", return ok
};

export default {
	Delete,
	Login,
	Register,
};

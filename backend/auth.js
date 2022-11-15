import bcrypt from "bcryptjs";

export const Register = (username, password) => {
	// TODO: implement logic to create a user object with hashed password
	// add it to "the users" if not already a user with the identifier
	// return the user object { username, password }
};
export const Login = (username, password) => {
	// TODO: if user with these credentials exist, return a token
	// otherwise return an error ("could not login")
};

export const Delete = (username) => {
	// TODO: delete a user from "the users", return ok
};

export default {
	Delete,
	Login,
	Register,
};

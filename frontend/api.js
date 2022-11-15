import axios from "axios";

export const do_post_register = async (data) => {
	return await do_post("register", data);
};

export const do_post_login = async (data) => {
	return await do_post("login", data);
	// try {
	//     console.log("data", data)

	//     const res = await axios.post('http://localhost:9000/register', {
	//         method: 'post',

	//         headers: {
	//             'Content-Type': 'application/json'
	//         },
	//         data: JSON.stringify(data)
	//     });
	//     console.log(res.data)
	//     return res.data
	// } catch (error) {
	//     return error
	// }
};

const do_post = async (path, data) => {
	try {
		// console.log("data", data)

		const res = await axios.post("http://localhost:9000/" + path, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			data: JSON.stringify(data),
		});
		// console.log(res.data)
		return res.data;
	} catch (error) {
		return error;
	}
};

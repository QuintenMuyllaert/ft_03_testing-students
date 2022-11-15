<script setup>
import { Form, Field } from "vee-validate";
import { ref } from "vue";

const string_to_display = ref("no user");

async function onSubmit(values) {
	try {
		const { username, password } = values;
		console.log({ username, password });
		const res = await fetch("http://localhost:9000/register", {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username, password }), // body data type must match "Content-Type" header
		});
		const json = await res.json(); // parses JSON response into native JavaScript objects

		console.log({ json });
		string_to_display.value = json.username || json;
	} catch (e) {
		console.log(e);
	}
}
</script>

<template>
	<div>
		<h1>Register</h1>
		<span data-message-register>{{ string_to_display }}</span>
		<Form @submit="onSubmit">
			<div class="form-group">
				<label>Username</label>
				<Field name="username" type="text" class="form-control" />
			</div>
			<div class="form-group">
				<label>Password</label>
				<Field name="password" type="password" class="form-control" />
			</div>
			<div class="form-group">
				<button class="btn btn-primary" type="submit">Register</button>
			</div>
		</Form>
	</div>
</template>

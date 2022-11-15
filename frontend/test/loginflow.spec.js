/**
 * @jest-environment jsdom
 */
// https://test-utils.vuejs.org/guide/
import { mount, flushPromises } from "@vue/test-utils";

import Register from "../src/components/Register.vue";
test("Test register", async () => {
	const wrapper = mount(Register);
	const textElement = wrapper.get("[data-message-register]");
	expect(textElement.text()).toBe("no user");
	await wrapper.find("input[name=username]").setValue("marty");
	await wrapper.find("input[name=password]").setValue("apassword");
	// await wrapper.find('button[type="submit"]').trigger('click')
	await wrapper.find("form").trigger("submit");
	await flushPromises();
	expect(textElement.text()).toBe("marty");
});

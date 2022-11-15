/**
 * @jest-environment jsdom
 */
// https://test-utils.vuejs.org/guide/
/*
import { mount, flushPromises } from "@vue/test-utils";
import Register from "../src/components/Register.vue";

test("Test register", async () => {
	const wrapper = mount(Register);
	const textElement = wrapper.get("[data-message-register]");
	expect(textElement.text()).toBe("no user");
	await wrapper.find("input[name=username]").setValue("marty");
	await wrapper.find("input[name=password]").setValue("apassword");
	await wrapper.find('button[type="submit"]').trigger("click");
	await wrapper.find("form").trigger("submit");
	await flushPromises();
	expect(textElement.text()).toBe("marty");
});
*/

import puppeteer from "puppeteer";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

test("Test register", async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto("http://localhost:5173");
	await page.waitForSelector("input[name=username]");
	await page.type("input[name=username]", "marty");
	await page.type("input[name=password]", "apassword");
	await page.click('button[type="submit"]');

	const textElement = await page.$("[data-message-register]");
	while ((await page.evaluate((el) => el.textContent, textElement)) == "no user") {
		await delay(100);
	}

	await page.waitForSelector("[data-message-register]");
	const text = await page.evaluate((el) => el.textContent, textElement);
	expect(text).toBe("marty");
	await browser.close();
});

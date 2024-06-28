import { SELF } from "cloudflare:test";
import { describe, expect, it } from "vitest";
import "../src"; // Required to automatically re-run tests on changes.

const BASE_URL = "https://example.com";

describe("Black hole", () => {
	it.each(["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"])(
		"responds with 204 No Content for %s request",
		async function (method) {
			const response = await SELF.fetch(`${BASE_URL}/`, {
				method,
			});

			expect(response.status).toEqual(204);
			expect(response.statusText).toEqual("No Content");
			expect(await response.text()).toEqual("");
		}
	);

	it("responds with 204 No Content for random path", async function () {
		const path = self.crypto.randomUUID();

		const response = await SELF.fetch(`${BASE_URL}/${path}`);

		expect(response.status).toEqual(204);
		expect(response.statusText).toEqual("No Content");
		expect(await response.text()).toEqual("");
	});
});

import { test, expect } from "@playwright/test";

test.only("Learning Selectors", async ({ page }) => {
	// navigate to the webpage
	await page.goto("http://127.0.0.1:5500/clickMe.html");

	// 1 Selecting by ID
	await page.locator("#clickButton").click();

	// 2 Selecting by Class
	await page.locator(".button-style").click();

	// 3 Selecting by Tag and Class
	await page.locator("button.button-style").click();

	// 4 Selecting by Attribute
	await page.locator('[data-action="increment"]').click();
	// await page.locator('[id="clickButton"]').click();
	// await page.locator('[class="button-style"]').click();

	// 5 Selecting by Partial Attribute (inserting asterisk)
	await page.locator('[role*="but"]').click();

	// 6 Selecting by Text Content
	await page.locator("text=CLICK ME").click();

	// 7 Combining Selectors for Precise Selection (class and text) - find exact text match
	await page.locator('.button-style:text("CLICK ME")').click();

	// 8 Find elements containing specific text using has-text (can do partial text matches)
	await page.locator('button:has-text("click m")').click(); // partial text match

	// 9 Attribute and text combination
	await page.locator('[data-action="increment"]:text("CLICK ME")').click();

	// 10 Playwright Locators https://playwright.dev/docs/locators
	// Get by Text
	await page.getByText("CLICK ME").click();

	// Get by Role (uses regex, case insensitive)
	await page.getByRole("button", { name: /click me/i }).click();

	// Assert the counter
	await expect(page.locator("#counter")).toContainText("11");
});

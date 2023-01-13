import { test, expect } from '@playwright/test'

test("Contact Modal @vr", async ({ page }) => {
	await page.goto("/")
	await page.locator("#contact-button").click()
	await expect(page).toHaveScreenshot("contact-modal.png", {
		fullPage: true,
		timeout: 10000,
	})
})
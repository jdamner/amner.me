import { test, expect } from '@playwright/test'

test("Service Tabs @vr", async ({ page }) => {
	await page.goto("/")
	for( const el of await page.locator("#services-tabs button").all()) {
		await el.click()
		await expect(page).toHaveScreenshot(`service-tab-${await el.innerText()}.png`, {
			fullPage: true,
			timeout: 10000,
		})
	}
})
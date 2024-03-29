import { test, expect } from '@playwright/test'
import { getPages } from './helper';

test.describe.configure({ mode: 'parallel' });

for (const pageName of getPages()) {
  test(`Page: ${pageName} @vr`, async ({ page }) => {
    let path = pageName === 'index' ? '/' : `/${pageName}`;
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto(path, { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000); // wait for animations to finish
    let fileName = `page-${pageName}.png`;
    await expect(page).toHaveScreenshot(fileName,
      {
        fullPage: true,
        animations: "disabled",
        maxDiffPixelRatio: 0.05, // 5% of pixels can be different
      });
  });
}
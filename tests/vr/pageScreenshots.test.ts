import { test, expect } from '@playwright/test'
import { getPages } from '../helper';

test.describe.configure({ mode: 'parallel' });

for (const pageName of getPages()) {
  test(`Page: ${pageName} @vr`, async ({ page }) => {
    let path = pageName === 'index' ? '/' : `/${pageName}`;
    await page.goto(path);
    await page.evaluate(() => { window.scrollTo(0, document.body.scrollHeight); });
    let fileName = `page-${pageName}.png`;
    await expect(page).toHaveScreenshot(fileName,
      {
        fullPage: true,
      });
  });
}
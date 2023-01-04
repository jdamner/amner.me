import { test, expect } from '@playwright/test'
import fs from 'fs'
import path from 'path'

const pages = [
  'index',
  '404',
];
const posts = fs.readdirSync(path.join(__dirname, '../src/posts'));
posts.forEach((post) => {
  pages.push(`${post.replace('.md', '')}`);
});

for (const pageName of pages) {
  test(`Page: ${pageName}`, async ({ page }) => {
    let path = pageName === 'index' ? '/' : `/${pageName}`;
    await page.goto(path);
    await expect(page).toHaveScreenshot(`${pageName}.png`);
  });
}

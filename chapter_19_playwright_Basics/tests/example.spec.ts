import { test, expect } from '@playwright/test';

// page - built-in fixture you can directly use in Playwright

test('shows the TTACart heading', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

  await expect(page.getByRole('heading', { name: 'TTACart' })).toBeVisible();
});

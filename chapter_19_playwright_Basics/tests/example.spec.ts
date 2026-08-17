import { test, expect } from '@playwright/test'

// page - inbuild fixture - Functions you can directly use in playwright

test("Verify that the title will be TTA Cart", async ({ page }) => {
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page.locator('h1')).toContainText('TTACart');
});

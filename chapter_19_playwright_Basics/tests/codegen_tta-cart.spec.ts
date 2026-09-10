import { test, expect } from '@playwright/test';

test('shows an error for invalid login credentials', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

    await expect(page.getByRole('heading', { name: 'TTACart' })).toBeVisible();

    await page.locator('[data-test="username"]').fill('abc');
    await page.locator('[data-test="password"]').fill('abc@1234');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toHaveText(
        'Epic sadface: Username and password do not match any user in this service',
    );
});

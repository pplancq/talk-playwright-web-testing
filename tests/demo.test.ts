import { expect, test, test as it } from '@playwright/test';

test.describe('Demo page visual testing', () => {
  it('should match snapshot when form is completed', async ({ page }) => {
    await page.goto('/demo');
    await page.getByLabel('Email').fill('john@doe.comm');
    await page.getByLabel('I agree to the terms and conditions').click();
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot();
  });
});

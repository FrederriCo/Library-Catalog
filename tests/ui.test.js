const { expect, test } = require('@playwright/test');

test("Verify All Books link is visible", async ({ page }) => {
    await page.goto('http://localhost:3001');
    await page.waitForSelector('nav.navbar');

    const allBooksLink = await page.$('a[href="/catalog"]');
    const isVisibleAllBooksLink = await allBooksLink.isVisible();

    expect(isVisibleAllBooksLink).toBe(true);
}); 

test("Verify Login button is visible", async ({ page }) => {
    await page.goto('http://localhost:3001');
    await page.waitForSelector('nav.navbar');

    const loginButton = await page.$('a[href="/login"]');
    const isVisibleLoginButton = await loginButton.isVisible();

    expect(isVisibleLoginButton).toBe(true);
}); 
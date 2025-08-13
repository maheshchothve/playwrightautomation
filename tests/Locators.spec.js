const { test, expect } = require('@playwright/test');

test('Locators Test', async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");

  // Click on the login button
  await page.click('#login2');

  await page.fill('#loginusername', 'mahesh@1509');
  await page.fill('#loginpassword', 'Pass@123');

  await page.click("//a[normalize-space()='Log in']");


  // Wait until the logout button appears
  const logoutlink = page.locator("//a[normalize-space()='Log out']");

  await expect(logoutlink).toBeVisible();

  await page.close();

});

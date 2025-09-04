const { test, expect } = require('@playwright/test');

test('datepicker', async ({ page }) => {

      await  page.goto("https://testautomationpractice.blogspot.com/")
      await page.fill("#datepicker","12/30/2022")

      await  page.waitForTimeout(5000);

});

// test.only('start and end date days', async ({ page }) => {
//     await page.goto("https://testautomationpractice.blogspot.com/")
//     await page.locator("#start-date").fill("12/25/2022")
//     await page.locator("#end-date").fill("12/31/2022")
//     await page.waitForTimeout(5000);
// });
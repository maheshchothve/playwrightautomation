const { test, expect } = require('@playwright/test');

test('datepicker', async ({ page }) => {

      await  page.goto("https://testautomationpractice.blogspot.com/")
      await page.fill("#datepicker","12/30/2022")

      await  page.waitForTimeout(5000);

});
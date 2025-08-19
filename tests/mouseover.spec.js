const { test, expect } = require('@playwright/test');

test('mosueover', async ({ page }) => {

      await  page.goto("https://testautomationpractice.blogspot.com/")
     const btn = page.locator("//button[@class='dropbtn']")

     await btn.hover();

      await  page.waitForTimeout(5000);

});
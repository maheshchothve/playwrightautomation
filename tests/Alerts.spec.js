const { test, expect } = require('@playwright/test');

test.skip('alert ok only test', async ({ page }) => {

      await  page.goto("https://testautomationpractice.blogspot.com/")
//normal alert , only ok button.
      page.on('dialog',async dialog =>{
          expect(dialog.message()).toContain("I am an alert box!");
          expect(dialog.type()).toBe("alert");
          await dialog.accept();
      });

      await page.locator("//button[normalize-space()='Simple Alert']").click();
      await page.waitForTimeout(5000);


});
test('alert promt test', async ({ page }) => {

      await  page.goto("https://testautomationpractice.blogspot.com/")
//normal alert , only ok button.
      page.on('dialog',async dialog =>{
          expect(dialog.message()).toContain("Press a button!");
          expect(dialog.type()).toBe("confirm");
          await dialog.accept();
      });

      await page.locator("//button[normalize-space()='Confirmation Alert']").click();
      await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed OK!");
      await page.waitForTimeout(5000);


});

test("prompt alert test", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //normal alert , only ok button.
    page.on('dialog',async dialog =>{
        expect(dialog.message()).toContain("Please enter your name");
        expect(dialog.type()).toBe("prompt");
        await dialog.accept("John Doe");
    });

    await page.locator("//button[normalize-space()='Prompt Alert']").click();
    await expect(page.locator('//p[@id="demo"]')).toHaveText("Hello John Doe! How are you today?");
    await page.waitForTimeout(5000);
})
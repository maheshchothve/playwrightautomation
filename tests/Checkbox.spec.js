const{test,expect}= require('@playwright/test')

test('handle check box',async({page})=>{
   await  page.goto("https://testautomationpractice.blogspot.com/")

   await page.locator("//input[@id='sunday']").check();

   await expect(page.locator("//input[@id='sunday']")).toBeChecked();

   await page.waitForTimeout(5000);
})
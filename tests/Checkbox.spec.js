const{test,expect}= require('@playwright/test')

test('handle check box',async({page})=>{
   await  page.goto("https://testautomationpractice.blogspot.com/")

   await page.locator("//input[@id='sunday']").check();

   await expect(page.locator("//input[@id='sunday']")).toBeChecked();

   const checkboxes = [
      "//input[@id='sunday']",
      "//input[@id='monday']",
      "//input[@id='tuesday']"
   ];

   for (const locator of checkboxes) {
      await page.locator(locator).check();
      await expect(page.locator(locator)).toBeChecked();
   }

   if(await page.locator("//input[@id='sunday']").isChecked()){
      await page.locator("//input[@id='sunday']").uncheck();
   }

   await page.waitForTimeout(5000);
})
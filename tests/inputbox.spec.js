const{test,expect}= require('@playwright/test')

test('handle input box',async({page})=>{
   await  page.goto("https://testautomationpractice.blogspot.com/")

   await expect(page.locator('#name')).toBeVisible();
   await expect(page.locator('#name')).toBeEmpty();

   await page.locator('#name').fill('Mahesh');

   await page.waitForTimeout(5000);
})
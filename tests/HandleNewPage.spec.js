const { test, expect } = require('@playwright/test');


test('Handle page', async ({page})=>{
    await  page.goto("https://testautomationpractice.blogspot.com/")

    await page.dblclick("//button[@ondblclick='myFunction1()']");

    await page.screenshot({path :'screenshot/double click image.png'});
    await page.waitForTimeout(5000);


});
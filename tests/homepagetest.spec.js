 const {test,expect} =require('@playwright/test')

test('Home Page',async ({page})=>{
    await page.goto("https://www.automationexercise.com/");

    const pagetitle= await page.title();
    console.log("title of the page is"+pagetitle);

    await expect(page).toHaveTitle('Automation Exercise');

    await page.locator('//div[@class="shop-menu pull-right"]/ul/li[4]').click();

    console.log("clicked on the singup/login link");
    const logintitle=await page.title();
    console.log("title after clicking "+logintitle);

    await expect(page).toHaveTitle('Automation Exercise - Signup / Login');

} )
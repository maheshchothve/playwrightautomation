 const {test,expect} =require('@playwright/test')

test('Home Page',async ({page})=>{
    await page.goto("https://www.demoblaze.com/");

    const pagetitle= await page.title();
    console.log("title of the page is"+pagetitle);

    await expect(page).toHaveTitle('STORE');

    await page.close();

} )
import {test,expect} from '@playwright/test'

test('locator',async ({page})=>{

    await page.goto("https://www.demoblaze.com/");
     await page.click('id=login2');

     await page.fill('#loginusername','mahesh1997');

     await page.fill("input[id='loginpassword']",'Pass@123');

     await page.click("//button[text()='Log in']")

     //verify the logout button after succesful login
 
     //cconst nameofuser=await page.locator("//a[@id='nameofuser']");
    
     // Fetch the text content of the element to compare with expected text
    // const userText = await nameofuser.textContent();
    //console.log("content from this user name is"+userText);
     // Perform the comparison
     //await expect(userText).toBe("Welcome mahesh1997");

const logout=await page.locator("//a[text()='Log out']");
 
await expect(logout).toBeVisible();

page.close();

});
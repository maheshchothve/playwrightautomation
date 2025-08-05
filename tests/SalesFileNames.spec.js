const { test, expect, chromium } = require('@playwright/test');
const fs = require('fs');

test('Dynamic Login to AlixPartners Web App', async ({ }) => {
    test.setTimeout(120000); // Increase timeout

    // Read test data from JSON file
    const testData = JSON.parse(fs.readFileSync('testData.json', 'utf8'));

    // Launch browser in headed mode with Chrome
    const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const context = await browser.newContext();
    const page = await context.newPage();

    // Open the login page
    await page.goto('https://netopzdev-no.alixpartners.net/');

    // Enter email ID dynamically
    await page.fill('input[type="email"]', testData.email);

    // Click the "Next" button
    await page.click('#idSIButton9');

    // Wait for password field and enter password dynamically
    await page.waitForSelector('#i0118', { timeout: 60000 });
    await page.fill('#i0118', testData.password);

    // Click "Sign in"
    await page.click('#idSIButton9');

    console.log('Manually enter OTP and press Enter in the terminal...');
    await page.pause(); // Wait for manual OTP
    
    // Click "Sales Files" link
    const salesFilesLink = page.locator('a[href="/sales-files"]');
    await salesFilesLink.waitFor({ state: 'visible', timeout: 60000 });
    await salesFilesLink.click();


   
    const salesfiles= await page.$$("//main[@class='MuiBox-root mui-style-i9gxme']//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-3 MuiGrid-grid-xl-2.4 mui-style-1nscn09']");
     await salesfiles.waitFor({ state: 'visible', timeout: 60000 });
    console.log("Sales files loaded successfully!");    

    
    for(const salesfile of salesfiles){
       const salesFileName=await salesfile.textContent();
       console.log(`Sales File Name: ${salesFileName}`);

   }
});
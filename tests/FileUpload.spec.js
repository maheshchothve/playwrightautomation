const { test, expect,chromium } = require('@playwright/test');
 const fs = require('fs');

test('Upload a sales file with name', async ({  }) => {  

    // Read test data from JSON file
        const testData = JSON.parse(fs.readFileSync('testData.json', 'utf8'));
    //Launch browser in headed mode with Chrome

    const browser = await chromium.launch({ headless: false, channel: 'chrome' });
    const context = await browser.newContext();
    const page = await context.newPage();
    // Navigate to the upload page
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
    //await page.pause();

    // Click the "Sales Files" link
    const salesFilesLink = page.locator('a[href="/sales-files"]');
    await salesFilesLink.waitFor({ state: 'visible', timeout: 60000 });
    await salesFilesLink.click();
 
    console.log("Sales Files link clicked successfully!");
    // Wait for the page to load with a timeout (e.g., 10 seconds)
    try {
        // Wait for the page to navigate and load
        await page.waitForNavigation({
            waitUntil: 'networkidle', // Wait until the page is fully loaded (no ongoing network activity)
            timeout: 60000 // Timeout after 60 seconds if the page doesn't load
        });
        console.log("Sales Files page loaded successfully!");
    } catch (error) {
        console.error("Error: Timeout waiting for the page to load.");
        return; // Exit the test if page load fails
    }
 
    // Click the "New Sales File" button to open the pop-up
    await page.locator('button:has-text("New Sales File")').click();
 
    // Wait for the file upload pop-up to appear
    await page.waitForSelector('.MuiBox-root[role="presentation"]');
 
    // Fill in the file name in the input field (referenceName)
    const fileName = 'Sales File for Upload';  // You can set this as per your need or generate dynamically
    const fileNameInput = page.locator('input[placeholder="Sales File Name"]');
    await fileNameInput.fill(fileName);  // Fill the file name
 
    console.log(`File name filled as: ${fileName}`);
 
    // Locate the hidden file input element
    const fileInput = page.locator('input[type="file"]');
 
    // Upload the file (ensure the correct path)
    // Use correct file path
    await fileInput.setInputFiles(testData.fileName); 
 
    console.log("File selected successfully!");
 
    // Click the submit button after selecting the file
    await page.locator('button:has-text("Submit")').click();
 
    console.log("File uploaded successfully!");
});
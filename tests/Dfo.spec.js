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
    //await page.pause(); // Wait for manual OTP

    // Click "Sales Files" link
    const salesFilesLink = page.locator('a[href="/sales-files"]');
    await salesFilesLink.waitFor({ state: 'visible', timeout: 60000 });
    await salesFilesLink.click();

    // Click specific sales file dynamically
    const salesFile = page.getByText('DataTest');
    await salesFile.click({ timeout: 60000 });

    const result=page.locator("//button[@class='MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary mui-style-1xco1o4']")
    await result.click();
    console.log("result tab clicked")

    // Click "New Footprint Scenario"
    const footprintScenarioTab = page.getByRole('button', { name: 'New FootPrint Scenario' });
    await footprintScenarioTab.waitFor({ state: 'visible', timeout: 60000 });
    await footprintScenarioTab.click();
    console.log("new foot print scenario page")
    // Enter dynamic scenario name
    const scenarioNameInput = page.locator("//label[text()='Scenario Name *']");
    await scenarioNameInput.waitFor({ state: 'visible', timeout: 60000 });
    await scenarioNameInput.fill(testData.scenarioName);

    console.log("Scenario name entered successfully!");
    
});





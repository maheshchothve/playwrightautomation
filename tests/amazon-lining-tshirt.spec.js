const { test, expect } = require('@playwright/test');

test('Amazon.in - Get price of first 5 lining t-shirts', async ({ page }) => {
  // 1. Go to https://www.amazon.in/
  await page.goto('https://www.amazon.in/');

  // 2. Search for "lining tshirt"
  await page.locator('input#twotabsearchtextbox').fill('lining tshirt');
  await page.locator('input#nav-search-submit-button').click();

  // 3. Wait for results to load
  await page.waitForSelector('div.s-main-slot');

  // 4. Get the price of first 5 t-shirts
  const products = await page.locator('div.s-main-slot div[data-component-type="s-search-result"]');
  const count = await products.count();
  for (let i = 0; i < Math.min(5, count); i++) {
    const product = products.nth(i);
    const title = await product.locator('h2 a span').textContent();
    let price = await product.locator('span.a-price-whole').first().textContent();
    if (!price) price = 'Price not found';
    console.log(`Product ${i+1}: ${title?.trim()} | Price: ₹${price.trim()}`);
  }

  // 5. Take a screenshot of the results
  await page.screenshot({ path: 'amazon-lining-tshirt-results.png', fullPage: true });
});

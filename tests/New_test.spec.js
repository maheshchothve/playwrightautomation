// playwright-flipkart-casio.spec.js

const { test, expect } = require('@playwright/test');

test('Flipkart: login, select Casio watch in ₹3000–₹3500, add to cart with validation', async ({ page }) => {
  // Navigate to Flipkart
  await page.goto('https://www.flipkart.com');

  // Close initial login popup if present
  const closeLoginPopup = page.locator('button:has-text("✕")');
  if (await closeLoginPopup.isVisible()) {
    await closeLoginPopup.click();
  }

//   // Log in
//   await page.click('a:has-text("Login")');
//   await page.fill('input[autocomplete="username"]', 'YOUR_MOBILE_OR_EMAIL');
//   await page.click('button:has-text("CONTINUE")');
//   await page.fill('input[type="password"]', 'YOUR_PASSWORD');
//   await page.click('button:has-text("Login")');

//   // Ensure login succeeded
//   await expect(page.locator('div._1RAKT')).toBeVisible();

  // Search for Casio watch
  await page.fill('input[title="Search for products, brands and more"]', 'Casio watch');
  await page.press('input[title="Search for products, brands and more"]', 'Enter');
  await expect(page.locator('div._1YokD2')).toBeVisible();

  // Apply price filter (₹3000–₹3500)
  await page.fill('input[placeholder="Min"]', '3000');
  await page.fill('input[placeholder="Max"]', '3500');
  await page.click('button:has-text("GO")');

  // Wait for filtered results
  await page.waitForLoadState('networkidle');

  // Select first product in results
  const firstProduct = page.locator('a.s1Q9rs').first();
  const prodLink = await firstProduct.getAttribute('href');
  await firstProduct.click();

  // Switch to new tab if opened
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    // click already done above
  ]);

  await newPage.waitForLoadState();

  // Capture and validate price
  const priceText = await newPage.locator('div._30jeq3').first().textContent();
  const price = parseInt(priceText.replace(/[^\d]/g, ''), 10);
  expect(price).toBeGreaterThanOrEqual(3000);
  expect(price).toBeLessThanOrEqual(3500);

  // Add to cart
  await newPage.click('button:has-text("ADD TO CART")');

  // Validate item in cart
  await newPage.click('a[aria-label="Cart"]');
  await expect(newPage.locator(`text=₹${price}`)).toBeVisible();
});

const{test,expect}= require('@playwright/test')

test('drag and drop', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    const source = await page.locator("//div[@id='draggable']")
    const target = await page.locator("//div[@id='droppable']")

    await source.dragTo(target)

    await expect(target).toHaveText("Dropped!")
    await page.screenshot({ path: 'screenshot/drag-and-drop-results.png' });

})

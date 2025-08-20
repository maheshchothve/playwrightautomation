const { test, expect } = require('@playwright/test');

test('single upload', async ({ page }) => {

      await  page.goto("https://testautomationpractice.blogspot.com/")
     const btn = await page.locator("//input[@id='singleFileInput']")

     await btn.setInputFiles('tests/uploadfile/a.txt.docx');

     await page.locator("//button[normalize-space()='Upload Single File']").click();

     await expect(page.locator("//p[@id='singleFileStatus']")).toHaveText("Single file selected: a.txt.docx, Size: 11529 bytes, Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document")

      await  page.waitForTimeout(7000);
      await page.screenshot({ path: 'screenshot/single-upload-results.png' });

});

test('multiple upload', async ({ page }) => {

      await  page.goto("https://testautomationpractice.blogspot.com/")
     const btn = await page.locator("//input[@id='multipleFilesInput']")

     await btn.setInputFiles(['tests/uploadfile/a.txt.docx','tests/uploadfile/Overseas_Sales_Test_File.csv']);

     await page.locator("//button[normalize-space()='Upload Multiple Files']").click();

     await expect(page.locator("//p[@id='multipleFilesStatus']")).toHaveText(`Multiple files selected:
a.txt.docx, Size: 11529 bytes, Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document
Overseas_Sales_Test_File.csv, Size: 5925 bytes, Type: text/csv`)

      await  page.waitForTimeout(7000);

          await page.screenshot({ path: 'screenshot/multiple-upload-results.png' });


});


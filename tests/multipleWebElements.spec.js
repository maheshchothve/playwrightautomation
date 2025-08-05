const{test,expect}= require('@playwright/test');

test('Multiple Web Elements Interaction', async ({ page }) => {

   await page.goto("https://www.automationexercise.com/");

   const products=page.$$("//div[@class='col-sm-4']//div[@class='product-image-wrapper']/div/div/p");
  //await expect(products).toHaveCount(40);

    for(const product of products){
        const productName=await product.textContent();
        console.log(`Product Name: ${productName}`);
    }

})

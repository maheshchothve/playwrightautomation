exports.Homepage = 
class Homepage{
    constructor(page){
        this.page=page;
        this.productList="//*[@id='tbodyid']/div/div/div/h4/a";
        this.addToCartButton="//a[@class='btn btn-success btn-lg']";
        this.cartbtn="[id='cartur']";
    }
    
    async AddToCart(ProductName){
       const productslist= await this.page.$$(this.productList);
       for(let product of productslist){
        if(ProductName === await product.textContent()){
            console.log(`Adding ${ProductName} to cart`);
            //await this.page.waitForTimeout(3000); // Wait for 1 second to ensure the product is ready
            await product.click();
            break;
        }
       }
       await this.page.on('dialog',async dialog =>{
        if (dialog.message().includes("added")) {
            await dialog.accept();
        }

       });

       await this.page.locator(this.addToCartButton).click();

    }
    async gotocart(){
        await this.page.locator(this.cartbtn).click();

    }
}
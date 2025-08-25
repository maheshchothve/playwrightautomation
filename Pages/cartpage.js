exports.cartpage= class cartpage{

    constructor(page){
        this.page=page;
        this.noofproduct="//div[@class='table-responsive']/table/tbody/tr/td[2]";
        this.deletebtn="//div[@class='table-responsive']/table/tbody/tr/td[4]"
    
    }
    async cartpage(productName){
            const ProductsinCart = await this.page.$$(this.noofproduct);
            for(let product of ProductsinCart){
                console.log(await product.textContent());
                if (productName === await product.textContent()) {
                    return true;
                    break;

                }
            }
        }
    async deleteFun(productName){
        const ProductsinCartno = await this.page.$$(this.deletebtn);
        for(let product of ProductsinCartno){
            if (productName === await product.textContent()) {
                await product.click();
                break;
            }
        }
    }

}
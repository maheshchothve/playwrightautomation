exports.cartpage= class cartpage{

    constructor(page){
        this.page=page;
        this.noofproduct="//div[@class='table-responsive']/table/tbody/tr/td[2]";
    
    }
    async cartpage(){
            const ProductsinCart = await this.page.$$(this.noofproduct);
            for(let product of ProductsinCart){
                console.log(await product.textContent());
                if (productName === await product.textContent()) {
                    return true;
                    break;
                }
            }
        }

}
const{test,expect}= require('@playwright/test')

test('handle check box',async({page})=>{
   await  page.goto("https://testautomationpractice.blogspot.com/")
    
   await page.selectOption('#colors',['red','yellow','blue'])
   
//Handle the hidden dropdown
   await page.locator("input[id='comboBox']").click();
   await page.waitForSelector("//div[@id='dropdown']/div");
   
    const Options= await  page.$$("//div[@id='dropdown']/div");

    for(const option of Options){
      
        const value=await option.textContent();

        if(value.includes('Item 21')){
         await option.click();
        }
        


        //mahesh chothve
        //14/08/25
      
    }
})
const{test,expect}= require('@playwright/test')

test('handle check box',async({page})=>{
   await  page.goto("https://testautomationpractice.blogspot.com/")
    let status=false;
   const options = await page.$$('#country option')

   for(const option of options){ 
      let value = await option.textContent()

      if(value.includes('India')){
        status=true;
        break;
      } 
   }
   expect(status).toBe(true);
   await page.waitForTimeout(5000);
})

test.only('Dropdown',async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
   const options = await page.$$('//select[@id="country"]/option')
   for(const option of options){
      let value =await option.textContent()
      console.log(value);
   }
   await page.waitForTimeout(5000);
});
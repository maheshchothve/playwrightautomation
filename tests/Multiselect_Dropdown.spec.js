const{test,expect}= require('@playwright/test')

test('handle check box',async({page})=>{
   await  page.goto("https://testautomationpractice.blogspot.com/")
    
   await page.selectOption('#colors',['red','yellow','blue'])
   await page.waitForTimeout(5000);
})
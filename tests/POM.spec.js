import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/LoginPage';

import { Homepage } from '../Pages/AddTocart';
import { cartpage } from '../Pages/cartpage';


test('locator',async ({page})=>{

    //login
    const Login=new LoginPage(page)

    await Login.gotoLoginPage();
    //await Login.loginlink;
    // await Login.usernameInput('mahesh1997');
    // await Login.passwordInput('Pass@123');
    await Login.login('mahesh1997','Pass@123');
    // await Login.loginbutton;
    await page.waitForTimeout(3000);
    //AddTocart
    const home = new Homepage(page);
    await home.AddToCart("Nexus 6");
    await page.waitForTimeout(3000);
     await home.gotocart();
     await page.waitForTimeout(3000);

    //verify product added in cart
    const cart = new cartpage(page);
    const isProductInCart = await cart.cartpage("Nexus 6");
    expect(isProductInCart).toBe(true);
    //REMOVE THE ADDED ITEMS FROM CART
    //await cart.deleteFun("Nexus 6");
});
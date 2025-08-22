exports.LoginPage = 
class LoginPage{
    constructor(page){
        this.page=page;
        this.loginlink="id=login2";
        this.usernameInput="#loginusername";
        this.passwordInput="input[id='loginpassword']";
        this.loginbutton="//button[text()='Log in']";
    }
    async gotoLoginPage(){
        await this.page.goto("https://www.demoblaze.com/");
    }
    async login(username,password){
        await this.page.click(this.loginlink);
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.click(this.loginbutton);
    }
}
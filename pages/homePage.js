class HomePage{
constructor(page){
    this.page=page;
    this.searchBox=page.locator('.input-search');
     this.email=page.locator('[type="email"]');
        this.password=page.locator('[type="password"]');
        this.alwaysSignIn=page.locator('#true');
        this.closePopUp=page.locator(".onetrust-close-btn-handler.onetrust-close-btn-ui.banner-close-button.ot-close-icon")
        this.signInButton=page.locator('button:has-text("Sign In")');
        this.searchresult=page.locator(".large.flex-search-result");
}

async goto() {
    await this.page.goto(process.env.Base_URL);
  }

async search(item){
    await this.searchBox.fill(item);
    await this.page.keyboard.press("Enter");
}
 async signIn(email,password){
    await this.email.fill(email);
    await this.password.fill(password);
    await this.alwaysSignIn.click();
    await this.closePopUp.click();
    await this.signInButton.click();
  }

}

module.exports = HomePage;
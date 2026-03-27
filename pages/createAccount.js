class CreateAccount {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('[name="first-name"]');
    this.lastName = page.locator('[name="last-name"]');
    this.emailAddress = page.locator('[name="email"]');
    this.password = page.locator('[name="password"]');
    this.birthMonth = page.locator('#month');
    this.birthDay = page.locator('#day');
    this.phNumber=page.locator('#v-0-20');
    this.submitButton=page.locator('#ca-profile-submit');


  }

  async goto() {
    await this.page.goto(process.env.BASE_URL);
  }

  async createAcc(fname, lname, email, password, birthMonth, birthDay, phNumber) {
    await this.firstName.fill(fname);
    await this.lastName.fill(lname);
    await this.emailAddress.fill(email);
    await this.password.fill(password);
    await this.birthMonth.selectOption(birthMonth);
    await this.birthDay.selectOption(birthDay);
    await this.phNumber.fill(phNumber);
    await this.submitButton.click();
  }
}

export default CreateAccount ;

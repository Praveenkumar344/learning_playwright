const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SignIn = require('../pages/signIn');

let siPage;

Given('the user is on the sign in page', async function () {
//   new SignIn(this.page).goto();
  siPage = new SignIn(this.page);
  await siPage.goto();
});

When('they enter valid credentials', async function () {
  await siPage.signIn(process.env.USER_EMAIL, process.env.USER_PASSWORD);
});

Then('they should be logged in successfully', async function () {
  await expect(this.page.locator('span.grid-x.heavy-sm').nth(0)).toHaveText('Hi, John', { timeout: 15000 });

});

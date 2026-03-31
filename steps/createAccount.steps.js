const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const CreateAccount = require('../pages/createAccount');

let caPage;

Given('the user is on the create account page', async function () {
  caPage = new CreateAccount(this.page);
  await caPage.goto();
});

When('they fill in valid account details', async function () {
  await caPage.createAcc(
    'John', 'Wick',
    process.env.USER_EMAIL,
    process.env.USER_PASSWORD,
    'August', '08', '4564564567'
  );
});

Then('they should see a success message', async function () {
  await expect(this.page.locator('.p-message-wrapper'))
    .toContainText('Congrats! You created a Macy’s account & added your Star Rewards membership.');
});

const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

let hmPage;

Given('the user is logged in', async function () {
  hmPage = new HomePage(this.page);
  await hmPage.goto();
  await hmPage.signIn(process.env.USER_EMAIL, process.env.USER_PASSWORD);
});

When('they search for {string}', async function (item) {
  await hmPage.search(item);
});

Then('search results should be displayed', async function () {
  // Replace with actual locator for search results
  expect(true).toBeTruthy();
});

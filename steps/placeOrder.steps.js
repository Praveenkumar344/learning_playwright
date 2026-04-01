const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const PDP = require('../pages/pdp');

let hmPage;
let pdpPage;

//
// Login + Search
//
Given('the user is logged in', async function () {
  hmPage = new HomePage(this.page);
  await hmPage.goto();
  await hmPage.signIn(process.env.USER_EMAIL, process.env.USER_PASSWORD);
});

When('they search for {string}', async function (item) {
  await hmPage.search(item);
});

Then('search results should be displayed', async function () {
  await expect(hmPage.searchresult).toBeVisible();
});

//
// PDP navigation
//
When('user clicks the first item', async function () {
  const firstItem = this.page.locator('.large.flex-search-result').first();
  await firstItem.click();
  pdpPage = new PDP(this.page);
});

Then('User should be redirected to the pdp page', async function () {
  await expect(this.page).toHaveURL(/.*\/shop/); // adjust regex to match your PDP URL
});

//
// Add to bag
//
When('user clicks Add to bag', async function () {
  await pdpPage.addTOBag();
});

Then('the item should be added to the bag', async function () {
  // Adjust locator to whatever confirmation your site shows
  const confirmation = this.page.locator('.bag-confirmation-message');
  await expect(confirmation).toBeVisible();
});

//
// View bag + order
//
When('user goes to the bag', async function () {
  await pdpPage.viewBag();
});

Then('user clicks on order now', async function () {
  // Locator for the "Order Now" button
  const orderNowButton = this.page.locator(
    '.primary.button.flex-button-content.align-middle.button.emphasis.expanded.margin-bottom-xs'
  );
  await expect(orderNowButton).toHaveText('Order Now');
  await orderNowButton.click();

  // After clicking, check that "Continue Shopping" button is visible
  const continueShoppingButton = this.page.locator(
    '.button.expanded.primary.margin-top-l'
  );
  await expect(continueShoppingButton).toHaveText('Continue Shopping');
});
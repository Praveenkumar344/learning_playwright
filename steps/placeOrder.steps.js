const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const PDP = require('../pages/pdp');
const Bag =require('../pages/bag');

let hmPage;
let pdpPage;

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


When('user clicks the first item', async function () {
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent('page'), // wait for new tab
    this.page.locator('.picture-image.loaded').nth(7).first().click()
    
  ]);
  await newPage.waitForLoadState();
  pdpPage = new PDP(newPage);
  this.page = newPage; // reassign so subsequent steps use the new tab
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
  const confirmation = this.page.locator('.h4.large-11.small-11.medium-11');
  await expect(confirmation).toBeVisible();
});

//
// View bag + order
//
When('user goes to the bag page', async function () {
  await pdpPage.viewBag();
});

Then('user clicks on order now', async function () {
  await Bag.gotoCheckOutPage();

  // After clicking, check that "Continue Shopping" button is visible
  const continueShoppingButton = this.page.locator(
    '.button.expanded.primary.margin-top-l'
  );
  await expect(continueShoppingButton).toHaveText('Continue Shopping');
});
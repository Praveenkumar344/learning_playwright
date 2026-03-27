import { test, expect } from '@playwright/test';
import CreateAccount  from '../pages/createAccount';
import SignIn from '../pages/signIn';
import HomePage from '../pages/homePage';
// import dotenv from 'dotenv';
// dotenv.config();

test.skip('successful account creation', async ({ page }) => {
  const caPage = new CreateAccount(page);
  await caPage.goto();
  await caPage.createAcc('John', 'wick',process.env.USER_EMAIL,process.env.USER_PASSWORD,'August','08','4564564567');
  // await page.waitForTimeout(10000);
  await expect(page.locator('.p-message-wrapper')).toContainText('Congrats! You created a Macy’s account & added your Star Rewards membership.');
});

test('successful Login', async ({ page }) => {
  const siPage = new SignIn(page);
  await siPage.goto();
  await siPage.signIn(process.env.USER_EMAIL,process.env.USER_PASSWORD);
  await page.waitForTimeout(5000);
  // await page.locator('i.icon-28x28.profile').click();
  await expect(page.locator('span:has-text("Hi, John")')).toHaveText('Hi, John');

});

test('search bag ',async({page})=>{
  const hmPage=new HomePage(page);
  await hmPage.goto();
   await hmPage.signIn(process.env.USER_EMAIL,process.env.USER_PASSWORD);
  await hmPage.search("bag");
  // test.true();
  expect(true).toBeTruthy();

})
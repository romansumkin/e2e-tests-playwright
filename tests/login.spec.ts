import {test} from '@playwright/test'
import { LoginPage } from '../pages/login-page'

test ('Login', async ({page}) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.fillUserName();
  await loginPage.fillPassword();
  await loginPage.clickLogin();
  await loginPage.shouldBeProfilePage();
  await loginPage.quit();

});
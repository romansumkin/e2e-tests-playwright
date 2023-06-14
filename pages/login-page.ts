import { expect, Locator, Page, BrowserServer } from '@playwright/test';
import { BasePage } from './base-page';

const LoginPageUrl = 'https://demoqa.com/login'
const ProfilePageUrl = 'https://demoqa.com/profile'

export class LoginPage extends BasePage{

  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {

    super(page, LoginPageUrl);
    this.page = page; 
    this.userName = page.locator('#userName');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login')
  }

  async fillUserName(){
    await this.userName.fill('IvanIvanov');
  }

  async fillPassword(){
    await this.password.fill('Qwer1234!');
  }

  async clickLogin(){
    await this.loginButton.click();
  }

  async shouldBeProfilePage(){
    await expect(this.page).toHaveURL(ProfilePageUrl)
  }
}

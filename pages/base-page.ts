import type { Page } from '@playwright/test';

export class BasePage {

  private readonly path;
  readonly page: Page;

  constructor(page: Page, path: string) {
    this.page = page;
    this.path = path;
  }

  async open() {
    if (!this.path) {
      throw new Error("Wrong page url");
    }
    await this.page.goto(this.path);
  }

  async quit(){
    await this.page.close()
  }
}
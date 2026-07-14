import { Locator, Page } from '@playwright/test';

export class MyInfoPage {
  readonly page: Page;
  readonly personalDetailsHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.personalDetailsHeading = page.locator('h6').filter({ hasText: /Personal Details/i });
  }

  async open() {
    await this.page.goto('/pim/viewPersonalDetails/empNumber/7');
  }
}

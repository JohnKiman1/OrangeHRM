import { Locator, Page } from '@playwright/test';

export class AdminPage {
  readonly page: Page;
  readonly systemUsersHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.systemUsersHeading = page.locator('h6').filter({ hasText: /System Users/i });
  }

  async open() {
    await this.page.goto('/admin/viewSystemUsers');
  }
}

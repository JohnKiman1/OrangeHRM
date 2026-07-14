import { Locator, Page } from '@playwright/test';

export class PimPage {
  readonly page: Page;
  readonly employeeListHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.employeeListHeading = page.locator('h6').filter({ hasText: /Employee List/i });
  }

  async open() {
    await this.page.goto('/pim/viewEmployeeList');
  }
}

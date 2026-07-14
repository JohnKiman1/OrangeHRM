import { Locator, Page } from '@playwright/test';

export class TimePage {
  readonly page: Page;
  readonly timesheetHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.timesheetHeading = page.locator('h6').filter({ hasText: /Timesheet/i });
  }

  async open() {
    await this.page.goto('/time/viewEmployeeTimesheet');
  }
}

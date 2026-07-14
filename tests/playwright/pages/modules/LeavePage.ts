import { Locator, Page } from '@playwright/test';

export class LeavePage {
  readonly page: Page;
  readonly leaveModuleHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.leaveModuleHeading = page.locator('h6').filter({ hasText: /Leave/i });
  }

  async open() {
    await this.page.goto('/leave/viewLeaveModule');
  }
}

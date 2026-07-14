import { Locator, Page } from '@playwright/test';

export class RecruitmentPage {
  readonly page: Page;
  readonly candidatesHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.candidatesHeading = page.locator('h6').filter({ hasText: /Candidates/i });
  }

  async open() {
    await this.page.goto('/recruitment/viewCandidates');
  }
}

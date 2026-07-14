import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  constructor(public readonly page: Page) {}

  get heading(): Locator {
    return this.page.getByRole('heading', { name: /Dashboard/i });
  }

  get sidePanel(): Locator {
    return this.page.locator('nav[aria-label="Sidepanel"]');
  }

  async waitForDashboard(): Promise<void> {
    await this.heading.waitFor({ state: 'visible' });
  }
}
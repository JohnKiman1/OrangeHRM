import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { readJsonData } from '../utils/jsonReader';
import { storageStatePath, testDataPath } from '../constants/paths';

export type TestFixtures = {
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  testData: Record<string, unknown>;
  authenticatedPage: Page;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
  testData: async ({}, use) => {
    const data = readJsonData(testDataPath);
    await use(data);
  },
  authenticatedPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: storageStatePath });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

export { expect };

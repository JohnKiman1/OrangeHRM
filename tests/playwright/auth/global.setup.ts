import { chromium, FullConfig } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import { storageStatePath } from '../constants/paths';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: ' Login ' }).click();
  await page.waitForURL(/dashboard/);

  fs.mkdirSync(path.dirname(storageStatePath), { recursive: true });
  await context.storageState({ path: storageStatePath });
  await browser.close();

  if (config.projects.length === 0) {
    throw new Error('No Playwright projects were configured.');
  }
}

export default globalSetup;

import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: './tests/playwright/tests',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'report/playwright-report', open: 'never' }],
    ['json', { outputFile: 'report/playwright-report/results.json' }],
    ['allure-playwright', { 
        outputFolder: 'allure-results',
        suiteTitle: true,
        environmentInfo: {
          'Test Environment': process.env.TEST_ENV || 'local',
          'Browser': process.env.BROWSER || 'chromium',
          'Execution Time': new Date().toISOString()
        }
      }],
  ],
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  outputDir: 'test-results/',
  globalSetup: path.resolve(__dirname, 'tests/playwright/auth/global.setup.ts'),
});

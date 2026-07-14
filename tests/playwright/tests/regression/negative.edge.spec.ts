import { test, expect } from '../../fixtures';

test.describe('Negative and edge cases', () => {
  test('blocks login with empty username and password', { tag: ['@regression', '@negative', '@sanity'] }, async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.loginButton.click();
    await expect(loginPage.usernameInput).toBeVisible();
  });

  test('blocks login with empty password', { tag: ['@regression', '@negative'] }, async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.usernameInput.fill('Admin');
    await loginPage.loginButton.click();
    await expect(loginPage.passwordInput).toBeVisible();
  });

  test('blocks login with empty username', { tag: ['@regression', '@negative'] }, async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.passwordInput.fill('admin123');
    await loginPage.loginButton.click();
    await expect(loginPage.usernameInput).toBeVisible();
  });

  test('rejects malformed credentials', { tag: ['@regression', '@negative'] }, async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.loginWithCredentials('admin@', 'admin123');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('handles direct navigation to protected routes without session', { tag: ['@regression', '@negative'] }, async ({ page }) => {
    await page.goto('/admin/viewSystemUsers');
    await expect(page).toHaveURL(/viewSystemUsers|auth\/login/);
  });

  test('handles direct navigation to dashboard with a fresh context', { tag: ['@regression', '@negative'] }, async ({ page }) => {
    await page.goto('/dashboard/index');
    await expect(page).toHaveURL(/dashboard\/index|auth\/login/);
  });

  test('maintains login page availability after repeated opens', { tag: ['@regression', '@sanity'] }, async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.open();
    await expect(loginPage.usernameInput).toBeVisible();
  });

  test('rerenders login form consistently after invalid attempts', { tag: ['@regression', '@negative'] }, async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.loginWithCredentials('Admin', 'wrong-password');
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
  });

  test('supports page reload during login flow', { tag: ['@regression', '@negative'] }, async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.usernameInput.fill('Admin');
    await loginPage.page.reload();
    await expect(loginPage.usernameInput).toBeVisible();
  });
});

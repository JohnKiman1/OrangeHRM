import { Page, Locator } from '@playwright/test';
import { routes } from '../constants/routes';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: ' Login ' });
    this.errorMessage = page.getByText(/Invalid credentials/i);
  }

  async open() {
    await this.page.goto(routes.login, { waitUntil: 'domcontentloaded' });
    await this.usernameInput.waitFor({ state: 'visible' });
  }

  async loginWithCredentials(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

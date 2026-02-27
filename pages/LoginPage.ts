import { Page, Locator } from '@playwright/test';
import { logger } from '../utils/logger';

export class LoginPage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;

  constructor(private page: Page) {
    this.username = page.getByRole('textbox', { name: 'Username' });
    this.password = page.getByRole('textbox', { name: 'Password' });
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }

  async login(username: string, password: string) {
    logger.info('Starting login process');

    await this.username.fill(username);
    logger.info(`Entered username: ${username}`);

    await this.password.fill(password);
    logger.info('Entered password');

    await this.loginBtn.click();
    logger.info('Clicked Login button');

    await this.page.waitForURL(/dashboard/, { timeout: 15000 });
    logger.info('Login successful - Dashboard loaded');
  }
}
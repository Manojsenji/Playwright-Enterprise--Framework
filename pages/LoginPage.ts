import { Page, Locator } from '@playwright/test';

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
  await this.username.fill(username);
  await this.password.fill(password);

  await this.loginBtn.click();

  await this.page.waitForURL(/dashboard/, { timeout: 15000 });
}

}
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('Login Test', async ({ page }) => {
  await page.goto('/');
  const login = new LoginPage(page);
  await login.login('Admin', 'admin123');
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  //await page.waitForTimeout(3000);
});
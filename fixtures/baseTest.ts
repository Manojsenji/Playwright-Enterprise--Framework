import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { logger } from '../utils/logger';

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use, testInfo) => {
    try {
      logger.info(`Starting Test: ${testInfo.title}`);

      await page.goto('/');
      logger.info('Navigated to application');

      const login = new LoginPage(page);
      await login.login('Admin', 'admin123');

      await use(page);

      logger.info(`Test Passed: ${testInfo.title}`);
    } catch (error) {
      logger.error(`Test Failed: ${testInfo.title}`);
      logger.error(`Error: ${error}`);

      await page.screenshot({
        path: `screenshots/${testInfo.title}.png`,
        fullPage: true,
      });

      throw error;
    }
  },
});

export { expect };
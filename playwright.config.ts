import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Get environment from command line
const env = process.env.ENV || 'qa';

// Load correct env file
dotenv.config({ path: `.env.${env}` });

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  retries: 2,
  workers: 3,

  reporter: [
    ['html'],
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],

  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    launchOptions: {
      slowMo: 500,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
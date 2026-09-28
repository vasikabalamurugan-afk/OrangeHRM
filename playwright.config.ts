import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env')});
export default defineConfig({
  testDir: './tests',

  timeout: 250000,
  fullyParallel: false,

  reporter: [
    ['html', { open: 'never' }]
  ],

  use: {
    baseURL: process.env.BASE_URL,
    video: 'on',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
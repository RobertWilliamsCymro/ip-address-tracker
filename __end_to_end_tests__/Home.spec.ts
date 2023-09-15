import { test, expect } from "@playwright/test";
import {mockData} from './MockData';
import {AxeBuilder} from '@axe-core/playwright'

test("IP Address Tracker loads correctly", async ({ page }) => {
  await page.goto("http://localhost:3000");


  await page.route('https://ipwhois.app/json/194.60.38.225', async route => {
    const json =  mockData;
    await route.fulfill({ json });
  });
  // Check that the page title is correct
  expect(await page.title()).toBe("IP Address Tracker");

  // Check that the search input is visible

  await expect(page.getByPlaceholder("Search for any IP address or domain")).toBeVisible();

  await expect(page.getByText('194.60.38.225')).toBeVisible();
  await expect(page.getByText('Upper Norwood, United Kingdom')).toBeVisible();
  await expect(page.getByText('Europe/London')).toBeVisible();
  await expect(page.getByText('THE HOUSE OF COMMONS')).toBeVisible();

});

test("Test only for wcag violations", async ({page}) => {
  await page.goto("http://localhost:3000/");

  const accessibilityScanResults = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

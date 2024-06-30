
const { test, expect } = require('@playwright/test');

test('Handeling Url,Title,Text', async ({ page }) => {
  await page.goto('https://www.polestar.com/se');
  await page.waitForTimeout(2000)
  await page.locator("//button[text()='Accept all']").click()
  const url = page.url();
  console.log('Page URL is:', url);
  const title = await page.title();
  console.log('Page Title is:', title);
  await page.locator('svg[aria-label="menu"]').click()
  await page.waitForTimeout(2000)
  const locator = page.locator("//span[text()='Polestar 2']");
  const textContain = await locator.innerText()
  console.log("Page Text is :" +textContain)
  await expect(locator).toContainText('Polestar 2');
  await page.waitForTimeout(5000)
})


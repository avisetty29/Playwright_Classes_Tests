import{test,expect} from "@playwright/test";
test("Drop-down menu- Single select",async ({page})=>
{
    await page.goto("https://semantic-ui.com/modules/dropdown.html");
    const dropdown=page.locator("div[tabindex='0']>i[class='dropdown icon']").nth(1);
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toBeEnabled();
    await dropdown.click();
    const selector=page.locator(".menu.transition.visible>[data-value='1']");
    await expect(selector).toBeVisible();
    //  4 ways of Selecting options 
    // await page.locator("input[name='gender']").nth(0).selectOption(['Male','Female']); ->visible text
    // await page.locator("input[name='gender']").nth(0).selectOption({value:'Male'}) -> Value attribute
    // await page.locator("input[name='gender']").nth(0).selectOption({label:'Male'}) -> label attribute
    // await page.locator("input[name='gender']").nth(0).selectOption({index:1}) -> index attribute
    await selector.click();
    await expect.soft(page.getByText('Male').first()).toBeVisible();
    await page.waitForTimeout(10000);
})

test('test codegen', async ({ page }) => {
  await page.goto('https://semantic-ui.com/modules/dropdown.html');
  await page.locator('.ui.selection > .dropdown').first().click();
  await page.getByText('Gender Male Female').first().click();
  await expect(page.getByText('Gender Male Female').first()).toBeVisible();
  await page.locator('.ui.selection > .dropdown').first().click();
  await page.getByText('Selection A dropdown can be').click();
  await page.locator('.ui.selection > .dropdown').first().click();
  await page.getByText('Male').first().click();
  await page.getByText('Male Male Female').click();
  await page.getByText('Male').nth(1).click();
  await expect(page.getByText('Male').first()).toBeVisible();
});

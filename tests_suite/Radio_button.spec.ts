/*  Radio :- It is a way of input to choose one option from a set */
/* Key Actions 
1. Check Visibility 
2. Check enabled
3. perform .check() action
4. Verify selection 
5. perform .uncheck() action */

import{test,expect,Locator} from "@playwright/test";
test("Radio Button Key Actions",async({page})=>
{
  await page.goto("https://testautomationpractice.blogspot.com/");
  const male_radio:Locator= page.locator("#male");
  // Visibility Assertion 
  await expect(male_radio).toBeVisible();
  // Enability Assertion
  await expect(male_radio).toBeEnabled();
  // Assertion before element action 
  await expect(male_radio).not.toBeChecked();
  // Action performed using .check() methodç
  await male_radio.check();
  // Locator vs Selector 
  // Selector : await male_radio.check("#male");
  // Verifying Selection
  
  // Not recommeded after Action is performed expect(male_radio.isChecked()).toBe(true);
  await expect(male_radio).toBeChecked();
  await page.waitForTimeout(3000);
});



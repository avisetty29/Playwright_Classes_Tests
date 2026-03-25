//CheckBox allows selecting multiple options
/* Key Actions 
1. Check Visibility 
2. Check enabled
3. perform .check() action
4. Verify selection 
5. perform .uncheck() action */

import{test,expect,Locator} from "@playwright/test";
test("Checkbox Actions",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkbox:Locator=page.locator(".form-check-input[type='checkbox']");
    let count1:number= await checkbox.count();
    // Non -retrying Assertion
    expect(count1).toBe(7);
    const checkall=await checkbox.all();
    // checkall=[sunday, monday]
    for(const cb of checkall)
    {
        await expect(cb).toBeVisible();
        await expect(cb).toBeEnabled();
        await expect(cb).not.toBeChecked();
        await cb.check();
        await expect(cb).toBeChecked();
    }
    await page.waitForTimeout(3000);
})
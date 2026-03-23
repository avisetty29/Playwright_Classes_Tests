import {test,expect,Locator} from "@playwright/test";
test("TextBox Actions & Assertions",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const textbox:Locator=page.getByRole("textbox");
    console.log(await textbox.count());

    for(let i=0;i<await textbox.count();i++)
    {
        //Assertions for all the textboxes 
        await expect(textbox.nth(i)).toBeVisible();
        await expect(textbox.nth(i)).toBeEnabled();
        // .fill() Recommed action--> Action && .type() -> Chracter by Character
        await textbox.nth(i).fill("Trivendra");
        //Input Validation Assertion
        const filled_value=await textbox.nth(i).inputValue();
        expect(filled_value.length).toBe(9);
    }
})
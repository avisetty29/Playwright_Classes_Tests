import{test,expect}from"@playwright/test";
test("Static Tables Demo", async({page})=>
{
    await page.goto("https://en.wikipedia.org/wiki/TV9_Telugu");
    const static_table=page.locator("table.wikitable>tbody");
    console.log(await static_table.allInnerTexts());
    console.log(await static_table.allTextContents());
    //Only Table Headers
     const headings=static_table.locator("tr>th");
     console.log(await headings.allInnerTexts());
    //print only specific row 
    const rows=static_table.locator("tr");
    //console.log(await rows.innerText())
    
    // nth-of-type not working hence it is written not recommeded
    for(let j=0;j<=24;j+=3)
    {
      let column=rows.locator("td").nth(j);
      console.log(await column.allInnerTexts());
    } 
})
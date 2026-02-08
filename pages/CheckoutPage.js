class CheckoutPage{
    constructor(page){
        this.page = page;
        this.countryInput = page.locator('[placeholder*="Country"]');
        this.dropdown = page.locator('.ta-results');
        this.placeOrderBtn = page.locator('.action__submit');
    }
    async selectCountry(countryName){
        await this.page.waitForLoadState('networkidle');
        await this.countryInput.pressSequentially("ind",{delay:100});
        await this.dropdown.waitFor();
        const option = await this.dropdown.locator("button").count();
        for(let i=0;i<option;i++)
        {
            const text = await this.dropdown.locator("button").nth(i).textContent();
            if(text===countryName)
            {
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
        }
    }
    async placeOrder(){
        await this.placeOrderBtn.click();
    }
}
module.exports ={CheckoutPage};
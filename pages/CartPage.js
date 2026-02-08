class CartPage {
    constructor(page){
        this.page = page;
        this.productText = page.locator('.cartSection h3');
        this.checkoutBtn = page.locator('text= Checkout');
    }
    async verifyProduct(productName){
        await this.page.waitForLoadState("networkidle");
        const count = await this.productText.count();
        console.log(count);
        return await this.productText.first().textContent()===productName;
    }
    async goToCheckout(){
        await this.checkoutBtn.click();
    }
}
module.exports ={CartPage};
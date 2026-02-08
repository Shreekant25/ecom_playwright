class DashboardPage {
    constructor(page){
        this.page = page;
        this.products = page.locator('.card-body');
        this.addToCartBtn = page.locator('[routerlink="/dashboard/cart"]');
    }
    async addProductToCart(productName){
        await this.page.waitForLoadState("networkidle");
        const count = await this.products.count();
        console.log("no of product" + count);
        for(let i=0;i<count;i++)
        {
            const text = await this.products.nth(i).locator("b").textContent();
            if(text==productName)
            {
                await this.products.nth(i).locator('text =Add To Cart').click();
                break;
            }
        }
    }
    async goToCart(){
        await this.addToCartBtn.click();
    }
}
module.exports = {DashboardPage};
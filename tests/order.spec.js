const{test,expect} = require('@playwright/test');
const{LoginPage} = require('../pages/LoginPage');
const{DashboardPage} = require('../pages/DashboardPage');
const{CartPage} = require('../pages/CartPage');
const{CheckoutPage} = require('../pages/CheckoutPage');
const data = require('../fixtures/testData.json');

test('Place order test',async({page})=>{
    const login = new LoginPage(page);
    const dash = new DashboardPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    await login.navigate();
    await login.login(data.email,data.password);
    await dash.addProductToCart(data.productName);
    await dash.goToCart();
     expect(await cart.verifyProduct(data.productName)).toBeTruthy();
     await cart.goToCheckout();
     await checkout.selectCountry(data.country);
     await checkout.placeOrder();
     const orderConfirm=await page.locator('.hero-primary').textContent();
     expect(orderConfirm).toBe(' Thankyou for the order. ');
     await page.screenshot({path:'screenshot/orderConfirm.png'});


});
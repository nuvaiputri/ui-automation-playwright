import {test, expect} from '@playwright/test'
import { homepage } from '../pages/homepage';
import { loginPage } from '../pages/loginPage';
import { productDetailPage } from '../pages/pdp';
import { cartPage } from '../pages/cartPage';
import { checkoutPage } from '../pages/checkoutPage';
import { checkoutCompletedPage } from '../pages/checkoutCompletedPage';

test('E2E Checkout process', async ({ page }) => {
    const Homepage = new homepage(page);
    const LoginPage = new loginPage(page);
    const ProductDetailPage = new productDetailPage(page);
    const CartPage = new cartPage(page);
    const CheckoutPage = new checkoutPage(page);
    const CheckoutCompletedPage = new checkoutCompletedPage(page);

    await page.goto('https://demowebshop.tricentis.com/');
    await Homepage.clickLoginMenu();
    await LoginPage.login('ladis@mail.com', 'Ladis@123');
    await Homepage.clickAddToCartBtn1();
    await ProductDetailPage.inputRecipientData('Rec Name', 'recmail@mail.com');
    await ProductDetailPage.inputSenderData('Sender name', 'sender@mail.com');
    await ProductDetailPage.inputMessage('this is message');
    await ProductDetailPage.clickAddToCartBtn();
    await ProductDetailPage.clickShoppingCartMenu();
    await CartPage.checkTermsOfServiceCheckbox();
    await CartPage.clickCheckoutBtn();
    await CheckoutPage.clickContinueOnBillingAddr();
    // await CheckoutPage.clickContinueOnShippingAddr();
    // await CheckoutPage.chooseShippingMethod();
    // await CheckoutPage.clickContinueOnShippingMethod();
    await CheckoutPage.clickContinueOnPaymentMethod();
    await CheckoutPage.clickContinueOnPaymentInfo();
    await CheckoutPage.clickConfirmBtn();
    await CheckoutCompletedPage.expectPageTitle();
    await CheckoutCompletedPage.expectTitle();
    await CheckoutCompletedPage.expectOrderDetail();
    await CheckoutCompletedPage.expectLinkToOrderDetail();
    await CheckoutCompletedPage.expectContinuBtn();
    await CheckoutCompletedPage.expectShoppingCart();


    
    // Add product
    // Go to cart
    // Checkout
});

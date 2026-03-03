import {test, expect} from '@playwright/test'
import { homepage } from '../pages/homepage';
import { loginPage } from '../pages/loginPage';
import { productDetailPage } from '../pages/pdp';

test('E2E Checkout process', async ({ page }) => {
    const Homepage = new homepage(page);
    const LoginPage = new loginPage(page);
    const ProductDetailPage = new productDetailPage(page);

    await page.goto('https://demowebshop.tricentis.com/');
    await Homepage.clickLoginMenu();
    await LoginPage.login('ladis@mail.com', 'Ladis@123');
    await Homepage.clickAddToCartBtn1();
    await ProductDetailPage.inputRecipientData('Rec Name', 'recmail@mail.com');
    await ProductDetailPage.inputSenderData('Sender name', 'sender@mail.com');
    await ProductDetailPage.inputMessage('this is message');
    await ProductDetailPage.clickAddToCartBtn();

    
    // Add product
    // Go to cart
    // Checkout
});

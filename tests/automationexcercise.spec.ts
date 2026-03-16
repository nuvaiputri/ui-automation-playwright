import { test, expect} from '@playwright/test';

test('Verify product in cart page successfully', async ({ page }) => {
    
    const productList = page.locator('.features_items');
    const firstProduct = page.locator('a[href="/product_details/1"]');
    const qtyField = page.locator('#quantity');
    const qty = '4';
    const productInfo = page.locator('.product-information h2');
    const addToCartBtn = page.getByRole('button', {name: 'Add to cart'});
    const continueShoppingBtn = page.getByRole('button', {name: 'Continue Shopping'});
    const cartMenu = page.getByRole('link', {name: ' Cart'});
    const cartQty = page.locator('.cart_quantity button');
    const cartProductName = page.locator('.cart_description a');

    // navigate to URL and verify homepage
    await page.goto('https://automationexercise.com/'); 
    await expect(page).toHaveURL('https://automationexercise.com/');   
    await expect(productList).toBeVisible(); 

    // Click first product and get name of the product
    await firstProduct.click();
    await qtyField.fill(qty);
    const productName = await productInfo.textContent();
    await addToCartBtn.click();
    await continueShoppingBtn.click();

    // go to cart menu and verify product in cart page
    await cartMenu.click();
    await expect(page).toHaveURL('https://automationexercise.com/view_cart');

    const getCartQty = await cartQty.innerText();
    const getCartProductName = await cartProductName.innerText();

    await expect(cartQty).toBeVisible();
    await expect(cartProductName).toBeVisible();
    await expect(getCartProductName).toEqual(productName);
    await expect(getCartQty).toEqual(qty);

})

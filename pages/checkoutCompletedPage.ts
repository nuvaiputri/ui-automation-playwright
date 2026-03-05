import { Page, Locator, Expect, expect} from "@playwright/test";

export class checkoutCompletedPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly title: Locator;
    readonly orderDetail: Locator;
    readonly linkToOrderDetail: Locator;
    readonly continueBtn: Locator;
    readonly shoppingCartMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('.page-title');
        this.title = page.locator('.title');
        this.orderDetail = page.locator('.details').getByText('Order number');
        this.linkToOrderDetail = page.locator('.details').getByText('Click here for order details.');
        this.continueBtn = page.getByRole('button', {name: 'Continue'});
        this.shoppingCartMenu = page.locator('#topcartlink .cart-qty');
    }

    async expectPageTitle() {
        await expect(this.pageTitle).toBeVisible();
        await expect(this.pageTitle).toHaveText('Thank you');
    }

    async expectTitle() {
        await expect(this.title).toBeVisible();
        await expect(this.title).toHaveText('Your order has been successfully processed!');
    }

    async expectOrderDetail() {
        await expect(this.orderDetail).toBeVisible();
        await expect(this.orderDetail).toHaveText(/Order number/);
    }

    async expectLinkToOrderDetail() {
        await expect(this.linkToOrderDetail).toBeVisible();
        await expect(this.linkToOrderDetail).toHaveText('Click here for order details.');
    }

    async expectContinuBtn() {
        await expect(this.continueBtn).toBeVisible();
    }

    async expectShoppingCart() {
        await expect(this.shoppingCartMenu).toBeVisible();
        await expect(this.shoppingCartMenu).toContainText('0');
    }
}
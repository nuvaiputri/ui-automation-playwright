import { Page, Locator, Expect } from "@playwright/test";

export class homepage {
    readonly page: Page;
    readonly addToCartBtn1: Locator;
    readonly loginMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addToCartBtn1 = page.getByRole('button', {name: 'Add to cart'}).nth(0);
        this.loginMenu = page.getByText('Log in');
    }

    async clickAddToCartBtn1(): Promise<void> {
        await this.addToCartBtn1.click()
    }

    async clickLoginMenu(): Promise<void> {
        await this.loginMenu.click();
    }
}
import { Page, Locator, Expect } from "@playwright/test";


export class productDetailPage{
    readonly page: Page;
    readonly recipientNameField: Locator;
    readonly recipientEmailField: Locator;
    readonly yourNameField: Locator;
    readonly yourEmailField: Locator;
    readonly messageField: Locator;
    readonly addToCartBtn: Locator;
    readonly shoppingCartMenu: Locator;

    constructor (page: Page) {
        this.page = page;
        this.recipientNameField = page.locator('.recipient-name');
        this.recipientEmailField = page.locator('.recipient-email');
        this.yourNameField = page.locator('.sender-name');
        this.yourEmailField = page.locator('.sender-email');
        this.messageField = page.locator('.message');
        this.addToCartBtn = page.getByRole('button', {name: 'Add to cart'}).nth(0);
        this.shoppingCartMenu = page.locator('#topcartlink').getByRole('link', {name: /Shopping cart/});

    }

    async inputRecipientData(name: string, email: string): Promise<void> {
        await this.recipientNameField.fill(name);
        await this.recipientEmailField.fill(email);
    }

    async inputSenderData(name: string, email: string): Promise<void> {
        await this.yourNameField.fill(name);
        await this.yourEmailField.fill(email);
    }

    async inputMessage(msg: string): Promise<void> {
        await this.messageField.fill(msg);
    }

    async clickAddToCartBtn(): Promise<void> {
        await this.addToCartBtn.click();
    }

    async clickShoppingCartMenu() {
        await this.shoppingCartMenu.click();
    }
}
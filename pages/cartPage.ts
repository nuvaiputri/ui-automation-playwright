import { Page, Locator, Expect } from "@playwright/test";

export class cartPage {
    readonly page: Page;
    readonly termsOfServiceCheckbox: Locator;
    readonly checkoutBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.termsOfServiceCheckbox = page.locator('#termsofservice');
        this.checkoutBtn = page.getByRole('button', {name: 'Checkout'});
    }

    async checkTermsOfServiceCheckbox() {
        await this.termsOfServiceCheckbox.check();
    }

    async clickCheckoutBtn() {
        await this.checkoutBtn.click();
    }
}
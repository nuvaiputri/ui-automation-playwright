import { Page, Locator, Expect } from "@playwright/test";

export class checkoutPage {
    readonly page: Page;
    readonly billingContBtn: Locator;
    readonly shippingAddressContBtn: Locator;
    readonly shippingMethodContBtn: Locator;
    readonly paymentMethodContBtn: Locator;
    readonly paymentInfoContBtn: Locator;
    readonly nextDayAirRadioBtn: Locator;
    readonly confirmOrderBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.billingContBtn = page.locator('#billing-buttons-container').getByRole('button', {name: 'Continue'});
        this.shippingAddressContBtn = page.locator('#shipping-buttons-container').getByRole('button', {name: 'Continue'});
        this.nextDayAirRadioBtn = page.locator('#shippingoption_1');
        this.shippingMethodContBtn = page.locator('#shipping-method-buttons-container').getByRole('button', {name: 'Continue'});
        this.paymentMethodContBtn = page.locator('#payment-method-buttons-container').getByRole('button', {name: 'Continue'});
        this.paymentInfoContBtn = page.locator('#payment-info-buttons-container').getByRole('button', {name: 'Continue'});
        this.confirmOrderBtn = page.locator('#confirm-order-buttons-container').getByRole('button', {name: 'Confirm'});
    }

    async clickContinueOnBillingAddr() {
        await this.billingContBtn.click();
    }

    async clickContinueOnShippingAddr() {
        await this.shippingAddressContBtn.click();
    }

    async chooseShippingMethod() {
        await this.nextDayAirRadioBtn.click();
    }

    async clickContinueOnShippingMethod() {
        await this.shippingMethodContBtn.click();
    }

    async clickContinueOnPaymentMethod() {
        await this.paymentMethodContBtn.click();
    } 

    async clickContinueOnPaymentInfo() {
        await this.paymentInfoContBtn.click();
    }

    async clickConfirmBtn() {
        await this.confirmOrderBtn.click();
    }
}
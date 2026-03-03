import { Page, Locator, Expect } from "@playwright/test";

export class loginPage {
    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator('#Email');
        this.passwordField = page.locator('#Password');
        this.loginBtn = page.getByRole('button', {name: 'Log in'});
    }

    async login(username: string, password: string): Promise<void>{
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }
}
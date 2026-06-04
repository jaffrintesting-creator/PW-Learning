import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './01 - BasePage';

export class LoginPage extends BasePage {
    readonly url = 'https://leaftaps.com/opentaps/control/main';

    // ----------Locators----------------
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton:   Locator;
    private readonly errorMessage:  Locator;

    constructor (page: Page) {
        super(page);
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('.decorativeSubmit');
        this.errorMessage = page.locator('#errorDiv');
    }

    // -------Action------------------------------

    // Navigation
    async open(): Promise<void> {
        await this.navogateTo(this.url);
    }

    // Fill Username and Passwprd then click the Login button
    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // -------Assertion--------------------------------

    // Error Message
    async getLoginErrorMessage(): Promise<string> {
        await this.errorMessage.waitFor({ state: 'visible' });
        return (await this.errorMessage.innerText()) ?? '';
    }

    async expectLoginErrorVisible(): Promise<void> {
        await expect(this.errorMessage).toBeVisible();
    }


}
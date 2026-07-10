import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { DashboardPage } from "../dashboard/DashboardPage";
import { Logger } from "../../services/Logger";
export class LoginPage extends BasePage {

    // Locators

    private readonly usernameTextbox: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;

    // Constructor

    constructor(page: Page) {

        super(page);

        this.usernameTextbox = page.locator("#username");
        this.passwordTextbox = page.locator("#inputPassword");
        this.loginButton = page.getByRole("button", {
            name: "Sign in"
        });

    }

    // Page Load Methods

    async waitForLoaded(): Promise<void> {

        await this.waitForVisible(this.loginButton);

    }


    // Business Methods

   async login(
    username: string,
    password: string
): Promise<DashboardPage> {

    Logger.info("Starting login process");

    await this.usernameTextbox.fill(username);
    await this.passwordTextbox.fill(password);
    await this.loginButton.click();

    const dashboardPage = new DashboardPage(this.page);

    await dashboardPage.waitForLoaded();

    Logger.info("Login completed successfully");

    return dashboardPage;

}

    // Validation Methods

    async isLoginPageDisplayed(): Promise<boolean> {

        return this.loginButton.isVisible();

    }

    async getLoginPageTitle(): Promise<string> {

        return this.getTitle();

    }


   // Navigation Method 
    async navigateToApplication(): Promise<void> {

    Logger.info("Opening application");

    await this.page.goto("/");

}

}
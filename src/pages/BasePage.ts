import { Locator, Page } from "@playwright/test";

export class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    protected async waitForVisible(
        locator: Locator
    ): Promise<void> {

        await locator.waitFor({
            state: "visible"
        });

    }

    protected async waitForHidden(
        locator: Locator
    ): Promise<void> {

        await locator.waitFor({
            state: "hidden"
        });

    }

    protected async waitForURL(
        url: string
    ): Promise<void> {

        await this.page.waitForURL(url);

    }

}
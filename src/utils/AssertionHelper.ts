import { expect, Locator, Page } from "@playwright/test";

export class AssertionHelper {

    public static async verifyVisible(
        locator: Locator
    ): Promise<void> {

        await expect(locator).toBeVisible();

    }

    public static async verifyHidden(
        locator: Locator
    ): Promise<void> {

        await expect(locator).toBeHidden();

    }

    public static async verifyTitle(
        page: Page,
        expectedTitle: string
    ): Promise<void> {

        await expect(page).toHaveTitle(expectedTitle);

    }

    public static async verifyUrl(
        page: Page,
        expectedUrl: string
    ): Promise<void> {

        await expect(page).toHaveURL(expectedUrl);

    }

    public static async verifyText(
        locator: Locator,
        expectedText: string
    ): Promise<void> {

        await expect(locator).toHaveText(expectedText);

    }

}
import { Page, TestInfo } from "@playwright/test";

export class ScreenshotManager {

    public static async captureOnFailure(
        page: Page,
        testInfo: TestInfo
    ): Promise<void> {

        const screenshotPath =
            `${testInfo.outputDir}/${testInfo.title.replace(/\s+/g, "_")}.png`;

        await page.screenshot({

            path: screenshotPath,

            fullPage: true

        });

        await testInfo.attach(
            "Failure Screenshot",
            {
                path: screenshotPath,
                contentType: "image/png"
            }
        );

    }

}
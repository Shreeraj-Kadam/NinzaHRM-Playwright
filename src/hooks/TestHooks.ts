import { test } from "../fixtures/baseFixture";
import { Logger } from "../services/Logger";
import { AllureAttachmentHelper } from "../utils/AllureAttachmentHelper";
import { EnvironmentPropertiesGenerator } from "../utils/EnvironmentPropertiesGenerator";

export class TestHooks {

    /**
     * Registers the beforeAll hook.
     */
    public static beforeAll(): void {

        test.beforeAll(async () => {

            EnvironmentPropertiesGenerator.generate();

            Logger.info("===== Test Execution Started =====");

        });

    }

    /**
     * Registers the beforeEach hook.
     */
    public static beforeEach(): void {

        test.beforeEach(async ({}, testInfo) => {

            Logger.info(
                `Starting Test : ${testInfo.title}`
            );

        });

    }

    /**
     * Registers the afterEach hook.
     *
     * Captures a screenshot and attaches it to the
     * Allure report if the test fails.
     */
    public static afterEach(): void {

        test.afterEach(async ({ page }, testInfo) => {

            if (testInfo.status !== testInfo.expectedStatus) {

                Logger.error(
                    `Test Failed : ${testInfo.title}`
                );

                const screenshot = await page.screenshot({

                    fullPage: true

                });

                await AllureAttachmentHelper.attachScreenshot(

                    "Failure Screenshot",

                    screenshot

                );

            }

            Logger.info(
                `Finished Test : ${testInfo.title}`
            );

        });

    }

    /**
     * Registers the afterAll hook.
     */
    public static afterAll(): void {

        test.afterAll(async () => {

            Logger.info("===== Test Execution Completed =====");

        });

    }

}
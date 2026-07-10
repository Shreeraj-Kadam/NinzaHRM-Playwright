import { test, expect } from "../../src/fixtures/baseFixture";
import { getEnvironment } from "../../src/config/config";
import { TestHooks } from "../../src/hooks/TestHooks";
import { Severity } from "allure-js-commons";
import { AllureHelper } from "../../src/utils/AllureHelper"; 


TestHooks.beforeAll();
TestHooks.beforeEach();
TestHooks.afterEach();
TestHooks.afterAll();

test(
    "Verify user can login and logout successfully",
    async ({
        baseTest,
        loginPage,
        dashboardPage
    }) => {


        await AllureHelper.setMetadata({

             epic: "Automation Testing",
             
            description:
                "Verifies that a valid user can successfully login into the Ninza HRM application and logout.",

            feature:
                "Authentication",

            story:
                "User Login",

            severity:
                Severity.CRITICAL,

            owner:
                "Shreeraj Kadam"

        });


        const environment = getEnvironment();

        await baseTest.loginToApplication(
            environment.username,
            environment.password
        );

        expect(
            await dashboardPage.isDashboardDisplayed()
        ).toBeTruthy();

        await baseTest.logoutFromApplication();

        expect(
            await loginPage.isLoginPageDisplayed()
        ).toBeTruthy();

    }
);
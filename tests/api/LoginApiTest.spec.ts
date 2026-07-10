import { test, expect } from "../../src/fixtures/baseFixture";
import { TestHooks } from "../../src/hooks/TestHooks";
import { getEnvironment } from "../../src/config/config";
import { LoginResponse } from "../../src/api/models/LoginResponse";
import * as allure from "allure-js-commons"; /* This dependency is to add the MEta Data to the Allure Reports */


// Register Test Hooks

TestHooks.beforeAll();

TestHooks.beforeEach();

TestHooks.afterEach();

TestHooks.afterAll();

/**
 * Verifies that a user can login successfully using Login API.
 */
test(

    "Verify user can login successfully using Login API",

    async ({

        baseApiTest

    }) => {


        await allure.description(

            "Verifies that a valid user can successfully login into the Ninza HRM application and logout."

        );

        await allure.feature(

            "Authentication"

        );

        await allure.story(

            "User Login"

        );

        await allure.severity(

            "critical"

        );

        await allure.owner(

            "Shreeraj Kadam"

        );

        const response =
            await baseApiTest.login();

        expect(

            response.status()

        ).toBe(200);

        const responseBody =
            await response.json() as LoginResponse;

        const environment =
            getEnvironment();

        expect(

            responseBody.access_token

        ).toBeTruthy();

        expect(

            responseBody.refresh_token

        ).toBeTruthy();

        expect(

            responseBody.username

        ).toBe(environment.username);

        expect(

            responseBody.role

        ).toBe("ROLE_ADMIN");

        expect(

            responseBody.token_type

        ).toBe("Bearer");

        expect(

            responseBody.expires_in

        ).toBeGreaterThan(0);

    }

);
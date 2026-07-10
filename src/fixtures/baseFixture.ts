import { test as base } from "@playwright/test";
import { FrameworkFixtures } from "../types/FrameworkFixtures";
import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { ProjectPage } from "../pages/project/ProjectPage";
import { ApiClient } from "../api/client/ApiClient";
import { AuthApi } from "../api/services/AuthApi";
import { BaseTest } from "../base/BaseTest";
import { BaseApiTest } from "../base/BaseApiTest";
import { ProjectApi } from "../api/services/ProjectApi";


export const test = base.extend<FrameworkFixtures>({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));

    },

    dashboardPage: async ({ page }, use) => {

        await use(new DashboardPage(page));

    },

    projectPage: async ({ page }, use) => {

        await use(new ProjectPage(page));

    },

    apiClient: async ({ request }, use) => {

        await use(new ApiClient(request));

    },

    authApi: async ({ apiClient }, use) => {

        await use(new AuthApi(apiClient));

    },

    projectApi: async ({ apiClient }, use) => {

        await use(new ProjectApi(apiClient));
    },

    baseApiTest: async ({ authApi }, use) => {
        await use(new BaseApiTest(authApi));

    },



    baseTest: async (

        {

            loginPage,

            dashboardPage

        },

        use

    ) => {

        await use(

            new BaseTest(

                loginPage,

                dashboardPage

            )

        );

    }



});

export { expect } from "@playwright/test";
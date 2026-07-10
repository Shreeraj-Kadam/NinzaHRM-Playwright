import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";
import { ProjectPage } from "../pages/project/ProjectPage";
import { ApiClient } from "../api/client/ApiClient";
import { AuthApi } from "../api/services/AuthApi";
import { BaseTest } from "../base/BaseTest";
import { BaseApiTest } from "../base/BaseApiTest";
import { ProjectApi } from "../api/services/ProjectApi";

export interface FrameworkFixtures {

    loginPage: LoginPage;

    dashboardPage: DashboardPage;

    projectPage: ProjectPage;

    apiClient: ApiClient;

    authApi: AuthApi;

    baseTest: BaseTest;

   baseApiTest : BaseApiTest

   projectApi: ProjectApi;

}
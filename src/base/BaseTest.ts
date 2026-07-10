import { LoginPage } from "../pages/auth/LoginPage";
import { DashboardPage } from "../pages/dashboard/DashboardPage";

export class BaseTest {

    constructor(

        private readonly loginPage: LoginPage,

        private readonly dashboardPage: DashboardPage

    ) {}

    public async loginToApplication(

        username: string,

        password: string

    ): Promise<void> {

        await this.loginPage.navigateToApplication();

        await this.loginPage.login(

            username,

            password

        );

        await this.dashboardPage.waitForLoaded();

    }

    public async logoutFromApplication(): Promise<void> {

        await this.dashboardPage.logout();

    }

}
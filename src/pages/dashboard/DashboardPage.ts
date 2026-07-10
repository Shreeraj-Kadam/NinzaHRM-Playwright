import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { LoginPage } from "../auth/LoginPage";
import { ProjectPage } from "../project/ProjectPage";
import { Logger } from "../../services/Logger";

export class DashboardPage extends BasePage {

    // Locators

    private readonly logoutButton: Locator;

    private readonly projectsLink: Locator;

    // Constructor

    constructor(page: Page) {

        super(page);

        this.logoutButton = page.getByTitle("Logout");

        this.projectsLink = page.getByRole("link", {
            name: "Projects"
        });

    }

    // Page Load Methods

    async waitForLoaded(): Promise<void> {

        await this.waitForVisible(this.logoutButton);

    }

    // Navigation Methods

    async navigateToProjects(): Promise<ProjectPage> {

        Logger.info("Navigating to Project module");

        await this.projectsLink.click();

        const projectPage = new ProjectPage(this.page);

        await projectPage.waitForLoaded();

        Logger.info("Project page opened successfully");

        return projectPage;

    }

    // Business Methods

    async logout(): Promise<LoginPage> {

        Logger.info("Logging out from application");

        await this.logoutButton.click();

        const loginPage = new LoginPage(this.page);

        await loginPage.waitForLoaded();

        Logger.info("Logout completed successfully");

        return loginPage;

    }

    // Validation Methods

    async isDashboardDisplayed(): Promise<boolean> {

        return await this.logoutButton.isVisible();

    }

}
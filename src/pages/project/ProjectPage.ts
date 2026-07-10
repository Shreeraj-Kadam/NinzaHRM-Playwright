import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { Logger } from "../../services/Logger";

export class ProjectPage extends BasePage {

    // Locators

    private readonly createProjectButton: Locator;

    private readonly projectNameTextbox: Locator;

    private readonly createdByTextbox: Locator;

    private readonly statusDropdown: Locator;

    private readonly addProjectButton: Locator;

    // Constructor

    constructor(page: Page) {

        super(page);

        this.createProjectButton = page.getByRole("button", {
            name: "Create Project"
        });

        this.projectNameTextbox = page.locator(
            "input[name='projectName']"
        );

        this.createdByTextbox = page.locator(
            "input[name='createdBy']"
        );

        this.statusDropdown = page.getByRole("combobox");

        this.addProjectButton = page.getByRole("button", {
            name: "Add Project"
        });

    }

    // Dynamic Locators

    /**
     * Returns the locator for the created project.
     *
     * @param projectName Project name to locate.
     * @returns Project locator.
     */
    private getProjectNameLocator(
        projectName: string
    ): Locator {

       // return this.page.getByText(projectName);
        return this.page.locator(`//div[contains(text(),'${projectName}')]`);
    }

    // Page Load Methods

    async waitForLoaded(): Promise<void> {

        await this.waitForVisible(
            this.createProjectButton
        );

    }

    // Business Methods

    /**
     * Creates a new project.
     *
     * @param projectName Project name.
     * @param createdBy Project creator.
     * @param status Project status.
     */
    async createProject(

        projectName: string,

        createdBy: string,

        status: string

    ): Promise<void> {

        Logger.info("Creating new project");

        await this.createProjectButton.click();

        await this.projectNameTextbox.fill(projectName);

        await this.createdByTextbox.fill(createdBy);

        await this.statusDropdown.selectOption(status);

        await this.addProjectButton.click();

        Logger.info("Project created successfully");

    }

    // Validation Methods

    /**
     * Verifies whether the specified project is displayed.
     *
     * @param projectName Project name to verify.
     * @returns True if the project is displayed; otherwise false.
     */
    async isProjectDisplayed(
        projectName: string
    ): Promise<boolean> {

        await this.waitForVisible(
            this.getProjectNameLocator(projectName)
        );

        return await this
            .getProjectNameLocator(projectName)
            .isVisible();

    }

}
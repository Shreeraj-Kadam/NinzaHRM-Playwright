import { test, expect } from "../../src/fixtures/baseFixture";
import { TestHooks } from "../../src/hooks/TestHooks";
import { getEnvironment } from "../../src/config/config";
import { ProjectData } from "../../src/testdata/project/ProjectData";

TestHooks.beforeAll();
TestHooks.beforeEach();
TestHooks.afterEach();
TestHooks.afterAll();

/**
 * Verifies that a user can create a new project successfully.
 */
test(
    "Verify user can create a new project successfully",

    async ({

        baseTest,

        dashboardPage,

        projectPage

    }) => {

        const environment = getEnvironment();

        const projectName = ProjectData.getProjectName(); // Dynamically we are generating the ProjectName

        await baseTest.loginToApplication(

            environment.username,

            environment.password

        );

        await dashboardPage.navigateToProjects();

        await projectPage.createProject(

            projectName,

            ProjectData.CREATED_BY,

            ProjectData.STATUS

        );

        await expect(

            await projectPage.isProjectDisplayed(

                projectName

            )

        ).toBeTruthy();

        await baseTest.logoutFromApplication();

    }

);
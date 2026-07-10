import { test, expect } from "../../src/fixtures/baseFixture";
import { TestHooks } from "../../src/hooks/TestHooks";
import { CreateProjectRequest } from "../../src/api/models/CreateProjectRequest";
import { CreateProjectResponse } from "../../src/api/models/CreateProjectResponse";
import { ProjectData } from "../../src/testdata/project/ProjectData";
import { DataGenerator } from "../../src/utils/DataGenerator";
import { ApiAssertions } from "../../src/utils/ApiAssertions";

// Register Hooks

TestHooks.beforeAll();

TestHooks.beforeEach();

TestHooks.afterEach();

TestHooks.afterAll();

/**
 * Verifies that a new project can be created successfully using the Create Project API.
 */
test(

    "Verify user can create a project using Project API",

    async ({

        projectApi

    }) => {

        const projectName =
            DataGenerator.getProjectName();

        const requestBody: CreateProjectRequest = {

            createdBy: ProjectData.CREATED_BY,

            projectName,

            status: ProjectData.STATUS,

            teamSize: ProjectData.TEAM_SIZE

        };

        const response =
            await projectApi.createProject(
                requestBody
            );

        expect(
            response.status()
        ).toBe(201);

        const responseBody =
            await response.json() as CreateProjectResponse;

        await ApiAssertions.verifyStatusCode(

    response,

    201

);

ApiAssertions.verifyProjectCreated(

    responseBody,

    requestBody.projectName,

    requestBody.createdBy,

    requestBody.status

);
    }

);
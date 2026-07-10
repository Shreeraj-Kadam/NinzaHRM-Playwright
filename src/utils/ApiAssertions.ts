import { expect, APIResponse } from "@playwright/test";
import { CreateProjectResponse } from "../api/models/CreateProjectResponse"

export class ApiAssertions {

    /**
     * Verifies the HTTP status code.
     *
     * @param response API response.
     * @param expectedStatus Expected HTTP status code.
     */
    public static async verifyStatusCode(

        response: APIResponse,

        expectedStatus: number

    ): Promise<void> {

        expect(

            response.status()

        ).toBe(expectedStatus);

    }

    /**
     * Verifies the Create Project API response.
     *
     * @param responseBody API response body.
     * @param expectedProjectName Expected project name.
     * @param expectedCreatedBy Expected creator.
     * @param expectedStatus Expected project status.
     */
    public static verifyProjectCreated(

        responseBody: CreateProjectResponse,

        expectedProjectName: string,

        expectedCreatedBy: string,

        expectedStatus: string

    ): void {

        expect(

            responseBody.msg

        ).toBe("Successfully Added");

        expect(

            responseBody.projectName

        ).toBe(expectedProjectName);

        expect(

            responseBody.createdBy

        ).toBe(expectedCreatedBy);

        expect(

            responseBody.status

        ).toBe(expectedStatus);

        expect(

            responseBody.projectId

        ).toBeTruthy();

        expect(

            responseBody.createdOn

        ).toBeTruthy();

    }

}
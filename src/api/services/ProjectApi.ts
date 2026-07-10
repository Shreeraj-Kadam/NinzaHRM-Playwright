import { APIResponse } from "@playwright/test";
import { ApiClient } from "../client/ApiClient";
import { ApiEndpoints } from "../../constants/ApiEndpoints";
import { ApiHeaderManager } from "../utils/ApiHeaderManager";
import { CreateProjectRequest } from "../models/CreateProjectRequest";
import { CreateProjectResponse } from "../models/CreateProjectResponse";
import { Logger } from "../../services/Logger";
import { ApiLogger } from "../../utils/ApiLogger";
import { AllureAttachmentHelper } from "../../utils/AllureAttachmentHelper";

export class ProjectApi {

    constructor(

        private readonly apiClient: ApiClient

    ) {}

    /**
     * Creates a new project using the Project API.
     *
     * @param requestBody Project details.
     * @returns API response.
     */
    public async createProject(

        requestBody: CreateProjectRequest

    ): Promise<APIResponse> {

        ApiLogger.logRequest(

            "Create Project",

            requestBody

        );

        await AllureAttachmentHelper.attachJson(

            "Create Project Request",

            requestBody

        );

        const headers =
            ApiHeaderManager.getDefaultHeaders();

        const response =
            await this.apiClient.post(

                ApiEndpoints.ADD_PROJECT,

                requestBody,

                headers

            );

        const responseBody =
            await response.json() as CreateProjectResponse;

        await AllureAttachmentHelper.attachJson(

            "Create Project Response",

            responseBody

        );

        await ApiLogger.logResponse(

            "Create Project",

            response,

            responseBody

        );

        return response;

    }

}
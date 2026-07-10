import { APIResponse } from "@playwright/test";
import { ApiClient } from "../client/ApiClient";
import { ApiHeaderManager } from "../utils/ApiHeaderManager";
import { TokenManager } from "../utils/TokenManager";
import { ApiEndpoints } from "../../constants/ApiEndpoints";
import { LoginRequest } from "../models/LoginRequest";
import { LoginResponse } from "../models/LoginResponse";
import { Logger } from "../../services/Logger";

export class AuthApi {

    constructor(
        private readonly apiClient: ApiClient
    ) {}

    /**
     * Sends login request and stores the access token.
     *
     * @param username Username.
     * @param password Password.
     * @returns Login API response.
     */
    public async login(
        username: string,
        password: string
    ): Promise<APIResponse> {

        Logger.info("Sending Login API request");

        const requestBody: LoginRequest = {

            username,

            password

        };

        Logger.info(

            `Request Body:\n${JSON.stringify(requestBody, null, 4)}`

        );

        const headers =
            ApiHeaderManager.getDefaultHeaders();

        const response =
            await this.apiClient.post(

                ApiEndpoints.LOGIN,

                requestBody,

                headers

            );

        const responseBody =
            await response.json() as LoginResponse;

        TokenManager.setToken(
            responseBody.access_token
        );

        Logger.info("Login API completed successfully");

        return response;

    }

}
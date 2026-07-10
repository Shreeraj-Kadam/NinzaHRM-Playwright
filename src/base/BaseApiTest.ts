import { APIResponse } from "@playwright/test";
import { AuthApi } from "../api/services/AuthApi";
import { getEnvironment } from "../config/config";

export class BaseApiTest {

    constructor(

        private readonly authApi: AuthApi

    ) {}

    /**
     * Authenticates the user using the Login API.
     *
     * @returns Login API response.
     */
    public async login(): Promise<APIResponse> {

        const environment = getEnvironment();

        return await this.authApi.login(

            environment.username,

            environment.password

        );

    }

}
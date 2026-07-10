import {
    APIRequestContext,
    APIResponse
} from "@playwright/test";

export class ApiClient {

    constructor(
        private readonly request: APIRequestContext
    ) {}

    public async get(
        endpoint: string,
        headers?: Record<string, string>,
        queryParameters?: Record<string, string>
    ): Promise<APIResponse> {

        return await this.request.get(endpoint, {

            headers,

            params: queryParameters

        });

    }

    public async post(
        endpoint: string,
        body?: unknown,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return await this.request.post(endpoint, {

            data: body,

            headers

        });

    }

    public async put(
        endpoint: string,
        body?: unknown,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return await this.request.put(endpoint, {

            data: body,

            headers

        });

    }

    public async patch(
        endpoint: string,
        body?: unknown,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return await this.request.patch(endpoint, {

            data: body,

            headers

        });

    }

    public async delete(
        endpoint: string,
        headers?: Record<string, string>
    ): Promise<APIResponse> {

        return await this.request.delete(endpoint, {

            headers

        });

    }

}
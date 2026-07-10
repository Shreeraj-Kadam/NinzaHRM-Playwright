import { APIResponse } from "@playwright/test";
import { Logger } from "../services/Logger"; 

export class ApiLogger {

    /**
     * Logs the API request details.
     *
     * @param apiName Name of the API.
     * @param requestBody Request payload.
     */
    public static logRequest(

        apiName: string,

        requestBody: unknown

    ): void {

        Logger.info(

            `Sending ${apiName} API request`

        );

        Logger.info(

            `Request Body:\n${JSON.stringify(requestBody, null, 4)}`

        );

    }

    /**
     * Logs the API response details.
     *
     * @param apiName Name of the API.
     * @param response API response.
     * @param responseBody Response payload.
     */
    public static async logResponse(

        apiName: string,

        response: APIResponse,

        responseBody: unknown

    ): Promise<void> {
        // response.ok() is provided by the plawright if the statuc code 200 - 299
        if (response.ok()) {

            Logger.info(

                `${apiName} API completed successfully`

            );

        } else {

            Logger.error(

                `${apiName} API failed`

            );

        }

        Logger.info(

            `Response Status : ${response.status()}`

        );

        Logger.info(

            `Response Body:\n${JSON.stringify(responseBody, null, 4)}`

        );

    }

}
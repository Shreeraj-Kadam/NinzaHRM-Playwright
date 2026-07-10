import { Environment } from "../config/Environment";

export class EnvironmentManager {

    public static getEnvironment(): Environment {
        const environment = process.env.TEST_ENV || "qa";
        if (!environment) {
            throw new Error(
                "TEST_ENV is not set. Supported values are: qa, uat, stage."
            );
        }
        if (!["qa", "uat", "stage"].includes(environment)) {
            throw new Error(
                `Invalid TEST_ENV: ${environment}. Supported values are: qa, uat, stage.`
            );
        }
        const config: Environment = {
            baseUrl: process.env.BASE_URL || "",
            apiUrl: process.env.API_URL || "",
            username: process.env.APP_USERNAME || "",
            password: process.env.APP_PASSWORD || ""
        };
        this.validateConfiguration(config);
        return config;
    }

    private static validateConfiguration(config: Environment): void {
        const requiredConfigurations = [
            {
                name: "BASE_URL",
                value: config.baseUrl
            },
            {
                name: "API_URL",
                value: config.apiUrl
            },
            {
                name: "APP_USERNAME",
                value: config.username
            },
            {
                name: "APP_PASSWORD",
                value: config.password
            }
        ];

        for (const configuration of requiredConfigurations) {

            if (!configuration.value) {
                throw new Error(`${configuration.name} is not configured.`);
            }

        }

    }

}
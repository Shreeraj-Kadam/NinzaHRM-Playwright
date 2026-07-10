import fs from "fs";
import path from "path";
import process from "process";
import { version as playwrightVersion } from "@playwright/test/package.json";

export class EnvironmentPropertiesGenerator {

    /**
     * Generates the environment.properties file
     * for the Allure report.
     */
    public static generate(): void {

        const outputDirectory = "allure-results";

        if (!fs.existsSync(outputDirectory)) {

            fs.mkdirSync(outputDirectory, {

                recursive: true

            });

        }

        const filePath = path.join(

            outputDirectory,

            "environment.properties"

        );

        const content = [

            `Application=Ninza HRM`,

            `Environment=${process.env.TEST_ENV || "qa"}`,

            `Framework=Playwright`,

            `Language=TypeScript`,

            `Node Version=${process.version}`,

            `Playwright Version=${playwrightVersion}`

        ].join("\n");

        fs.writeFileSync(

            filePath,

            content

        );

    }

}
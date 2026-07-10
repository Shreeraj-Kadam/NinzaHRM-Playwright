import * as allure from "allure-js-commons";
import { Severity } from "allure-js-commons";

/**
 * Represents metadata for an Allure test.
 */
export interface AllureMetadata {

    epic: string;
    description: string;

    feature: string;

    story: string;

    severity: Severity;

    owner: string;

}

/**
 * Utility class for adding Allure metadata.
 */
export class AllureHelper {

    /**
     * Adds metadata to the current Allure test.
     *
     * @param metadata Test metadata.
     */
    public static async setMetadata(

        metadata: AllureMetadata

    ): Promise<void> {

        await allure.description(

            metadata.description

        );


        await allure.epic(

            metadata.epic

        );
        await allure.feature(

            metadata.feature

        );

        await allure.story(

            metadata.story

        );

        await allure.severity(

            metadata.severity

        );

        await allure.owner(

            metadata.owner

        );

    }

}
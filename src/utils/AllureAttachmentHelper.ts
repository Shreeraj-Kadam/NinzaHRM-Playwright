import * as allure from "allure-js-commons";
import { ContentType } from "allure-js-commons";

/**
 * Utility class for adding attachments to Allure reports.
 */
export class AllureAttachmentHelper {

    /**
     * Attaches JSON content to the current Allure test.
     *
     * @param name Attachment name.
     * @param body JSON object.
     */
    public static async attachJson(

        name: string,

        body: unknown

    ): Promise<void> {

        await allure.attachment(

            name,

            JSON.stringify(body, null, 4),

            ContentType.JSON

        );

    }

    /**
     * Attaches plain text to the current Allure test.
     *
     * @param name Attachment name.
     * @param text Text content.
     */
    public static async attachText(

        name: string,

        text: string

    ): Promise<void> {

        await allure.attachment(

            name,

            text,

            ContentType.TEXT

        );

    }

    /**
     * Attaches a screenshot to the current Allure test.
     *
     * @param name Screenshot name.
     * @param screenshot Screenshot buffer.
     */
    public static async attachScreenshot(

        name: string,

        screenshot: Buffer

    ): Promise<void> {

        await allure.attachment(

            name,

            screenshot,

            ContentType.PNG

        );

    }

    /**
     * Attaches a video file to the current Allure test.
     *
     * @param name Video name.
     * @param videoPath Path of the video file.
     */
    public static async attachVideo(

        name: string,

        videoPath: string

    ): Promise<void> {

        await allure.attachmentPath(

            name,

            videoPath,

            {

                contentType: "video/webm"

            }

        );

    }

}
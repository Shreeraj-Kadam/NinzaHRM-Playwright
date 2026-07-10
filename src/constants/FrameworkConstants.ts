export class FrameworkConstants {

    public static readonly Timeout = {

        TEST: 60000,

        EXPECT: 10000,

        ACTION: 15000,

        NAVIGATION: 30000

    } as const;

    public static readonly Retry = {

        LOCAL: 0,

        CI: 2

    } as const;

    public static readonly Viewport = {

        WIDTH: 1920,

        HEIGHT: 1080

    } as const;

    public static readonly Report = {

        HTML_FOLDER: "playwright-report"

    } as const;

}
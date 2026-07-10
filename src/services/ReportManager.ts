import { Logger } from "./Logger";

export class ReportManager {

    public static startTest(testName: string): void {

        Logger.info(`Starting Test : ${testName}`);

    }

    public static endTest(testName: string): void {

        Logger.info(`Finished Test : ${testName}`);

    }

}
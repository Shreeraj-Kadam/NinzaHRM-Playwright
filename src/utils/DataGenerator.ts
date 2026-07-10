export class DataGenerator {

    /**
     * Generates a unique project name.
     *
     * Example:
     * MySoftProject_1752158456321
     */
    public static getProjectName(): string {

        return `MySoftProject_${Date.now()}`;

    }

}
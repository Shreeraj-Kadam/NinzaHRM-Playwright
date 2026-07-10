import { DataGenerator } from "../../utils/DataGenerator";

export class ProjectData {

    /**
     * Returns a unique project name.
     */
    public static getProjectName(): string {

        return DataGenerator.getProjectName();

    }

    /**
     * Project creator name.
     */
    public static readonly CREATED_BY = "Shreeraj";

    /**
     * Default project status.
     */
    public static readonly STATUS = "Created";

       /**
     * Default project status.
     */
    public static readonly TEAM_SIZE = 0;

}
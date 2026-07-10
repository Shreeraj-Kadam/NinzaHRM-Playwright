import { Environment } from "./Environment";
import { EnvironmentManager } from "../services/EnvironmentManager";

let environment: Environment | undefined;

export function getEnvironment(): Environment {

    if (!environment) {
        environment = EnvironmentManager.getEnvironment();
    }

    return environment;

}
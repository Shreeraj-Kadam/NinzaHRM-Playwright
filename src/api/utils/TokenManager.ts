export class TokenManager {

    private static token: string = "";

    public static setToken(
        token: string
    ): void {

        this.token = token;

    }

    public static getToken(): string {

        return this.token;

    }

    public static clearToken(): void {

        this.token = "";

    }

}
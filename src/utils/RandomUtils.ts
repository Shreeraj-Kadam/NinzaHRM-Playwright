export class RandomUtils {

    public static generateNumber(): number {

        return Math.floor(Math.random() * 100000);

    }

    public static generateString(
        prefix: string
    ): string {

        return `${prefix}${this.generateNumber()}`;

    }

    public static generateEmail(): string {

        return `user${this.generateNumber()}@test.com`;

    }

}
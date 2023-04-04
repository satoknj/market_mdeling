export class Stock {
    constructor(
        readonly code: string,
    ) {}

    isEqual(other: Stock): boolean {
        return this.code === other.code;
    }
}

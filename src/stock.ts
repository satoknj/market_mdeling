export class Stock {
    constructor(
        readonly code: string,
        readonly price: number,
        readonly amount: number
    ) {}

    add(addend: Stock): Stock {
        return new Stock(this.code, this.price, this.amount + addend.amount);
    }

    isEqual(other: Stock): boolean {
        return this.code === other.code;
    }
}

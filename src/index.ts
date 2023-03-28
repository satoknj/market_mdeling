import {Stock} from "./stock";

export class Trader {
    private readonly stocks: Stock[] = [];
    constructor(
        readonly cash: number
    ) {}

    ask(stock: Stock) {
        this.stocks.push(stock);
    }

    has(stock: Stock): boolean {
        return this.stocks.findIndex(s => s.isEqual(stock)) > -1;
    }

    amountOf(stock: Stock): number {
        return this.stocks.find(s => s.isEqual(stock))?.amount ?? 0;
    }
}

import {StockCode} from "./stock";

export class OwnedStock {
    constructor(
        readonly stockCode: StockCode,
        readonly ammount: number,
    ) {}
}

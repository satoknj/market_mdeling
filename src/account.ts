import {Order} from "./order";
import {OwnedStock} from "./ownedStock";
import {StockCode} from "./stock";

export class Account {
    // account should not manage value of stock!
    readonly valueMap = new Map<StockCode, number>();;

    constructor(
        readonly stocks: OwnedStock[]
    ) {}

    ask(order: Order) {
        const i = this.indexOfStock(order.stock);
        if (i === -1) {
            this.stocks.push(new OwnedStock(order.stock, order.amount));
        } else {
            const s = this.stocks[i];
            this.stocks[i] = new OwnedStock(s.stockCode, s.ammount + order.amount);
        }
        this.valueMap.set(order.stock, order.price);
    }
    ammountOf(stockCode: StockCode): number {
        const i = this.indexOfStock(stockCode);
        return i === -1 ? 0 : this.stocks[i].ammount;
    }
    portfolioValueOf(stockCode: StockCode): any {
        const ammount = this.ammountOf(stockCode);
        return ammount === 0 ? 0 : this.valueMap.get(stockCode)! * ammount;
    }

    private indexOfStock(stockCode: StockCode) {
        return this.stocks.findIndex((s) => s.stockCode === stockCode);
    }
}

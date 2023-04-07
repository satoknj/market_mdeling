import {Order} from "./order";
import {OwnedStock} from "./ownedStock";
import {StockCode} from "./stock";

export class Account {
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
    }
    ammountOf(stock: StockCode): number {
        const i = this.indexOfStock(stock);
        return i === -1 ? 0 : this.stocks[i].ammount;
    }

    private indexOfStock(stockCode: StockCode) {
        return this.stocks.findIndex((s) => s.stockCode === stockCode);
    }
}

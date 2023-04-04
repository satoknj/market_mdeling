import {Order} from "./order";
import {OwnedStock} from "./ownedStock";
import {Stock} from "./stock";

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
            this.stocks[i] = new OwnedStock(s.stock, s.ammount + order.amount);
        }
    }
    ammountOf(stock: Stock): number {
        const i = this.indexOfStock(stock);
        return i === -1 ? 0 : this.stocks[i].ammount;
    }

    private indexOfStock(stock: Stock) {
        return this.stocks.findIndex((s) => s.stock.isEqual(stock));
    }
}

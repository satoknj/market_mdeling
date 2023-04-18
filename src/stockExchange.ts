import {StockCode} from "./stock";

class Board {
    private readonly bids: number[] = [];
    private readonly asks: number[] = [];

    buy(price: number): boolean {
        const executingIndex = this.asks.findIndex((a) => price >= a);
        if (executingIndex === -1) {
            this.bids.push(price);
            return false;
        } else {
            this.asks.splice(executingIndex, 1);
            return true;
        }
    }

    sell(price: number): boolean {
        const executingIndex = this.bids.findIndex((a) => price <= a);
        if (executingIndex === -1) {
            this.asks.push(price);
            return false;
        } else {
            this.bids.splice(executingIndex, 1);
            return true;
        }
    }
    // refactorin ...
    private handleOrder(
        price: number,
    ) {}
}

export class StockExchange {
    // Todo: Map<StockCode, Board>
    private readonly board = new Board();
    private readonly stocks = new Map<StockCode, number>

    buy(stockCode: StockCode, price: number, ammount: number) {
        if (this.board.buy(price)) {
            this.stocks.set(stockCode, price);
        }
    }
    sell(stockCode: StockCode, price: number, ammount: number) {
        if (this.board.sell(price)) {
            this.stocks.set(stockCode, price);
        }
    }
    priceOf(stockCode: StockCode): number {
        const price = this.stocks.get(stockCode);
        return price === undefined ? 0 : price;
    }
}

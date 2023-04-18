import {StockExchange} from "./stockExchange";

describe('StockExchange', () => {
    describe('buy order, then sell order', () => {
        test('stock price is determined by the last traded price', () => {
            const sut = new StockExchange();
            sut.buy('1000', 100, 1);
            sut.sell('1000', 95, 1);
            expect(sut.priceOf('1000')).toBe(95);
        });
        test('stock price is not change if trade was not filled', () => {
            const sut = new StockExchange();
            sut.buy('1000', 100, 1);
            sut.sell('1000', 105, 1);
            expect(sut.priceOf('1000')).toBe(0);
        });
    });
    describe('sell order, then buy order', () => {
        test('stock price is determined by the last traded price', () => {
            const sut = new StockExchange();
            sut.sell('1000', 95, 1);
            sut.buy('1000', 100, 1);
            expect(sut.priceOf('1000')).toBe(100);
        });
    });
});

import {Account} from "./account";
import {Order} from "./order";

describe('Account', () => {
    const sut = new Account([]);
    const stockCode = '1000';
    const order = new Order(stockCode, 100, 1);

    test('know how many share of stock', () => {
        sut.ask(order);
        expect(sut.ammountOf(stockCode)).toBe(1);
    });
    test('can buy more stock', () => {
        const secondOrder = new Order(stockCode, 90, 1);
        sut.ask(secondOrder);
        expect(sut.ammountOf(stockCode)).toBe(2);
    });
});

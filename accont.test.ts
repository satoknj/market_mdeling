import {Account} from "./src/account";
import {Order} from "./src/order";
import {Stock} from "./src/stock";

describe('Account', () => {
    const sut = new Account([]);
    const stock = new Stock('1000')
    const order = new Order(stock, 100, 1);

    sut.ask(order);

    test('know how many shares of stock', () => {
        expect(sut.ammountOf(stock)).toBe(1);
    });
    test('can buy more stock', () => {
        const secondOrder = new Order(stock, 90, 1);
        sut.ask(secondOrder);
        expect(sut.ammountOf(stock)).toBe(2);
    });
});

import {Account} from "./account";
import {Order} from "./order";
import {Stock} from "./stock";

describe('Account', () => {
    test('know how many share of stock', () => {
        const sut = new Account([]);
        const stock = new Stock('1000')
        const order = new Order(stock, 100, 1);

        sut.ask(order);

        expect(sut.ammountOf(stock)).toBe(1);
    });
});

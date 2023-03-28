import {Trader} from ".";
import {Stock} from "./stock";

describe('buy stocks', () => {
    const buyer = new Trader(100);
    const stock = new Stock('1000', 100, 1);
    buyer.ask(stock);

    test('Buyer can buy stock', () => {
        expect(buyer.has(stock)).toBeTruthy();
    });
    test('Buyer know holding amount', () => {
        expect(buyer.amountOf(stock)).toBe(1);
    });
});

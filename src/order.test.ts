import {Stock} from "./stock";
import {Order} from "./order";

describe('Order', () => {
    test('Ask Order can be judged', () => {
        const stock = new Stock('1000');
        const sut = new Order(stock, 100, 1);

        expect(sut.isAgreeWith(100)).toBeTruthy();
    });
});

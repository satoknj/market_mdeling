import {Order} from "./order";

describe('Order', () => {
    test('Ask Order can be judged', () => {
        const sut = new Order('1000', 100, 1);

        expect(sut.isAgreeWith(100)).toBeTruthy();
    });
});

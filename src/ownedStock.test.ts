import {OwnedStock} from "./ownedStock";

describe('OwnedStock', () => {
    test('have ammount of the stock', () => {
        const sut = new OwnedStock('1000', 1);
        expect(sut.ammount).toBe(1);
    });
});

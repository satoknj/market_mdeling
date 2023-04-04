import {OwnedStock} from "./ownedStock";
import {Stock} from "./stock";

describe('OwnedStock', () => {
    test('have ammount of the stock', () => {
        const sut = new OwnedStock(new Stock('1000'), 1);
        expect(sut.ammount).toBe(1);
    });
});

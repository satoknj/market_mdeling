import {Stock} from "./stock";

describe('Calculation of stocks', () => {
    test('Stock can add each other', () => {
        const sut = new Stock('1000', 100, 1);
        const addend = new Stock('1000', 100, 2);
        const actual = sut.add(addend);

        expect(actual.amount).toBe(3);
    });
});

describe('Stock equality', () => {
    test('Same code stock is same', () => {
        const sut = new Stock('0001', 100, 1);
        const comparison = new Stock('0001', 110, 2);

        expect(sut.isEqual(comparison)).toBeTruthy();
    });
});

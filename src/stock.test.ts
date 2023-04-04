import {Stock} from "./stock";

describe('Stock equality', () => {
    test('Same code stock is same', () => {
        const sut = new Stock('0001');
        const comparison = new Stock('0001');

        expect(sut.isEqual(comparison)).toBeTruthy();
    });
});

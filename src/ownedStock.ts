import {Stock} from "./stock";

export class OwnedStock {
    constructor(
        readonly stock: Stock,
        readonly ammount: number,
    ) {}
}

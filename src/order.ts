import { Stock } from './stock';

export class Order {
    constructor(
        readonly stock: Stock,
        readonly price: number,
        readonly amount: number,
    ) {}

    isAgreeWith(price: number): boolean {
        return this.price <= price;
    }
}

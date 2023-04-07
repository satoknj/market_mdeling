import { StockCode } from './stock';

export class Order {
    constructor(
        readonly stock: StockCode,
        readonly price: number,
        readonly amount: number,
    ) {}

    isAgreeWith(price: number): boolean {
        return this.price <= price;
    }
}

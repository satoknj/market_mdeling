// buy stock

import {Account} from "./account";
import {Order} from "./order";
import {Stock} from "./stock";

const stock = new Stock('1000');
const order = new Order(stock, 100, 10);
const account = new Account([]);

account.ask(order);

console.log(`I have ${account.ammountOf(stock)} stocks`);

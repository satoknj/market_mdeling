// buy stock

import {Account} from "./account";
import {Order} from "./order";

const order = new Order('1000', 100, 10);
const account = new Account([]);

account.ask(order);
console.log(`I have ${account.ammountOf('1000')} stocks`);

account.ask(new Order('1000', 100, 2));
console.log(`I have ${account.ammountOf('1000')} stocks`);

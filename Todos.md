- [ ] refactor Account to use StockExchange

## StockExchange

- [ ] sell -> buy 
- [ ] clear in progress if order executed
- [ ] partially filled
- [ ] handle multiple order in progress

---

- [x] Introduce Stock type
- [x] Trader know own stock amount
- [x] What is suit for stock's idenfication. code?
- [x] need order?
- [x] need HoldingStock for know how many shares of stock
    - Trader should handle the number of owned stock using HoldingStock type.
    - Type name should be OwnedStock
- [x] need account?
- [x] account can buy more stock.
- [x] stock type is string type alias -> introduce StockCode
- [x] calc portfolio value
- [x] add StockExchange to manage value of stock

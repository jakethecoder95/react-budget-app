class Budget {
  constructor() {
    this.totalIncome = 0;
    this.totalExpenses = 0;
    this.items = {
      incomeItems: {},
      expenseItems: {}
    };
    this.catagoryTotals = {
      misc: 0,
      home: 0,
      transport: 0,
      groceries: 0,
      insurance: 0,
      dining: 0,
      entertainment: 0
    };

    this.addItem = item => {
      if (item.type === "inc") {
        this.totalIncome += item.value;
        this.items.incomeItems[item._id] = item;
      }
      if (item.type === "exp") {
        this.totalExpenses += item.value;
        this.catagoryTotals[item.catagory] += item.value;
        this.items.expenseItems[item._id] = item;
      }
    };
  }
}

module.exports = Budget;

const User = require("../Models/User");
const Item = require("../Models/Item");
const Budget = require("../Models/Budget");

exports.getUserBudget = async (req, res, next) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  try {
    const user = await User.findById(req.userId).populate("items");
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 401;
      throw error;
    }
    const budget = new Budget();
    const date = new Date();

    user.items.forEach(item => {
      // All persistant items
      if (item.persist) {
        return budget.addItem(item);
      }
      // Get All
      if (user.settings.selectedType === "all") {
        return budget.addItem(item);
      }
      const itemDate = new Date(item.date);
      // Get Month(s)
      if (user.settings.selectedType === "month") {
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();
        const monthsAmt = (user.settings.months - 1) % currentMonth;
        const beginYear = currentYear - Math.floor(user.settings.months / 12);

        const beginMonth =
          months[
            currentMonth >= monthsAmt
              ? currentMonth - (monthsAmt % currentMonth)
              : 12 - (monthsAmt - currentMonth)
          ];
        const beginDateString = `${beginMonth} ${beginYear}`;
        const beginDate = new Date(beginDateString);

        if (itemDate >= beginDate) {
          return budget.addItem(item);
        }
      }
      // Get Personalized Dates
      if (user.settings.selectedType === "personalize") {
        const { from, to } = user.settings;
        const fromArr = from.split(" ");
        const toArr = to.split(" ");

        const fromDate = new Date(`${fromArr[0]} ${fromArr[1]}`);
        const toDate = new Date(`${toArr[0]} ${toArr[1]}`);

        if (itemDate >= fromDate && itemDate <= toDate) {
          return budget.addItem(item);
        }
      }
    });
    res.status(200).json({
      budget,
      userSettings: {
        username: user.username,
        email: user.email,
        budgetSettings: user.settings
      }
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putItem = async (req, res, next) => {
  const { catagory, persist, description, type, value, date } = req.body.item;
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      error = new Error("No user found");
      error.statusCode = 401;
      throw error;
    }
    const item = new Item({
      catagory,
      description,
      type,
      value,
      persist,
      date,
      owner: user._id
    });
    user.items.push(item._id);
    res.status(200).json(item);
    item.save();
    user.save();
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  const itemId = req.body.itemId;
  try {
    const item = await Item.findById(itemId);
    if (item.owner.toString() !== req.userId) {
      const error = new Error("Not Authorized");
      error.statusCode = 403;
      throw error;
    }

    await Item.findByIdAndRemove(itemId);
    const user = await User.findById(req.userId);
    user.items.pull(itemId);
    await user.save();
    res.status(200).json({ message: "Item was deleted successfully!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.mergeBudget = async (req, res, next) => {
  const { items } = req.body;
  const { incomeItems, expenseItems } = items;
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 401;
      throw error;
    }
    const newItems = [...incomeItems, ...expenseItems].map(item => ({
      ...item,
      owner: user.id
    }));
    const items = await Item.insertMany(newItems);
    items.forEach(item => user.items.push(item._id));
    user.save();
    res.status(200).json({ msg: "working", items: req.body.items });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const User = require("../Models/User");
const Item = require("../Models/Item");
const Budget = require("../Models/Budget");

exports.getUserBudget = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId).populate("items");
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 401;
      throw error;
    }
    const budget = new Budget();
    const { all, from, to } = req.query;
    const currentDate = new Date();
    user.items.forEach(item => {
      // Get All
      if (all === "true") return budget.addItem(item);
      // Fetch only current month and persist.
      const itemDate = new Date(item.date);
      if (
        item.persist ||
        (itemDate.getMonth() === currentDate.getMonth() &&
          itemDate.getFullYear() === currentDate.getFullYear())
      ) {
        return budget.addItem(item);
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
  // TODO: AFTER USER SETTINGS IS CREATED (or something like this)
  // * Get users items based on date
  //   - if req.date === "all"
  //        return items = all user items
  //   - let from, to;
  //   - if date.from && !date.to
  //        return all date.from to new Date();
  //   - if date.from && date.to
  // - Loop through all items
  //        return all date between to and from
  //  budget.addItem(foundItem)
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

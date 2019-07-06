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
    let dateString;

    user.items.forEach(item => {
      // Get All
      if (user.settings.selectedType === "all") {
        dateString = dateString || "All of your available budget";
        if (item.persist) {
          return budget.addItem(item);
        }
        return budget.addItem(item);
      }
      const itemDate = new Date(item.date);
      // Get Month(s)
      if (user.settings.selectedType === "month") {
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();

        let beginMonthInt = currentMonth,
          beginYear = currentYear;
        for (let i = user.settings.months - 1; i > 0; i--) {
          if (beginMonthInt === 0) {
            beginMonthInt = 11;
            beginYear--;
            continue;
          }
          beginMonthInt--;
        }

        const beginDateString = `${months[beginMonthInt]} ${beginYear}`;
        const beginDate = new Date(beginDateString);

        dateString =
          dateString ||
          (user.settings.months === 1
            ? `Your budget for ${beginDateString}`
            : `Your budget for ${beginDateString} - ${
                months[currentMonth]
              } ${currentYear}`);

        if (item.persist) {
          item.value = item.value * user.settings.month;
          return budget.addItem(item);
        }
        if (itemDate >= beginDate) {
          return budget.addItem(item);
        }
      }
      // Get Personalized Dates
      if (user.settings.selectedType === "personalize") {
        const { from, to } = user.settings,
          fromArr = from.split(" "),
          toArr = to.split(" "),
          fromMonth = parseInt(fromArr[0]),
          fromYear = parseInt(fromArr[1]),
          toMonth = parseInt(toArr[0]),
          toYear = parseInt(toArr[1]);

        dateString =
          dateString ||
          `Your budget for ${months[fromMonth]} ${fromYear} - ${
            months[toMonth]
          } ${toYear}`;

        if (item.persist) {
          const monthsDifference =
            12 * (toYear - fromYear) + (toMonth - fromMonth);
          item.value = item.value * monthsDifference;
          return budget.addItem(item);
        }

        const fromDate = new Date(`${months[fromMonth]} ${fromYear}`);
        const toDate = new Date(`${months[toMonth]} ${toYear}`);

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
        budgetSettings: user.settings,
        dateString
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

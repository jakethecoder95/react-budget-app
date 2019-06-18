const User = require("../Models/User");

const onlyUserSettings = ({ email, username, settings }) => ({
  email,
  username,
  budgetSettings: { ...settings }
});

exports.updateUserBio = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 401;
      throw error;
    }
    user.email = req.body.email.trim();
    user.username = req.body.username.trim();
    await user.save();
    res.status(200).json({
      msg: "success",
      user: onlyUserSettings(user)
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateUserBudgetSettings = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      const error = new Error("No user found");
      error.statusCode = 401;
      throw error;
    }

    user.settings.selectedType = req.body.selectedType.trim();
    user.settings.months = req.body.months;
    if ((selectedType = "personalize")) {
      user.settings.from = `${req.body.from.month} ${req.body.from.year}`;
      user.settings.to = `${req.body.to.month} ${req.body.to.year}`;
    }

    await user.save();

    res.status(200).json({
      msg: "success",
      user: onlyUserSettings(user)
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

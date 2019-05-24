const User = require("../Models/User");

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
      user: { email: user.email, username: user.username }
    });
  } catch (err) {
    if (err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

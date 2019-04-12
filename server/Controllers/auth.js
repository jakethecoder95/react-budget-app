const bcrypt = require("bcryptjs");

const User = require("../Models/User");

exports.login = (req, res) => {
  res.status(200).json("working");
};

exports.signup = async (req, res) => {
  const password = req.body.password;
  try {
    const hashedPw = await bcrypt.hash(password, 12);
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPw
    });
    console.log(user);
    await user.save();
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "fail" });
  }
};

const crypto = require("crypto");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const { validationResult } = require("express-validator/check");
const { SENDGRID_KEY } = process.env.SENDGRID_KEY
  ? process.env
  : require("../secrets");

const User = require("../Models/User");

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: SENDGRID_KEY
    }
  })
);

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      const error = new Error("A user with this email could not be found");
      error.statusCode = 401;
      error.param = "email";
      error.value = email;
      throw error;
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Incorrect password");
      error.statusCode = 401;
      error.param = "password";
      error.value = password;
      throw error;
    }
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString()
      },
      "secret"
    );

    res.status(200).json({ token: token, userId: user._id.toString() });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  const password = req.body.password;
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed.");
      error.statusCode = 422;
      error.data = errors.array();
      throw error;
    }
    const hashedPw = await bcrypt.hash(password, 12);
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPw
    });
    await user.save();
    const token = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString()
      },
      "secret"
    );
    res.status(200).json({ token, userId: user._id.toString() });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.forgotPassword = (req, res, next) => {
  const email = req.body.email.trim();
  try {
    crypto.randomBytes(32, async (err, buffer) => {
      if (err) {
        console.log(err);
      }
      const token = buffer.toString("hex");
      const user = await User.findOne({ email });
      if (!user) {
        const error = new Error("A user with this email could not be found");
        error.statusCode = 401;
        error.value = email;
        throw error;
      }
      user.resetToken = token;
      user.resetTokenExpiration = Date.now() + 3600000;
      await user.save();
      res.status(200).json({ msg: "Success", value: email });
      await transporter.sendMail({
        to: email,
        from: "MyMoneyCarts@mymoneycharts.com",
        subject: "Password reset",
        html: `<p>You requested a password reset</p>
               <p>Click this <a href='https://mymoneycharts.herokuapp.com/auth/reset-password/${token}'>link</a> to reset your password</p>
               `
      });
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.resetPassword = async (req, res, next) => {
  const { token, newPassword } = req.body;
  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiration: { $gt: Date.now() }
    });
    if (!user) {
      const error = new Error("Token has expired");
      error.statusCode = 403;
      throw error;
    }
    newHashedPassword = await bcrypt.hash(newPassword, 12);
    user.password = newHashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();
    res.status(200).json({ msg: "Password was reset!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

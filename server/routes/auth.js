const express = require("express");
const { body } = require("express-validator/check");

const authControllers = require("../Controllers/auth");
const User = require("../Models/User");

const router = express.Router();

router.post("/login", authControllers.login);

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom(value => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 6 }),
    body("username")
      .trim()
      .isLength({ min: 2, max: 60 })
      .not()
      .isEmpty()
  ],
  authControllers.signup
);

module.exports = router;

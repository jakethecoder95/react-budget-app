const express = require("express");
const authControllers = require("../Controllers/auth");

const router = express.Router();

router.use("/signup", authControllers.signup);

router.use("/login", authControllers.login);

module.exports = router;

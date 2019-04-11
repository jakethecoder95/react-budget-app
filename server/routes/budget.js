const express = require("express");

const budgetControllers = require("../Controllers/budget");

const router = express.Router();

router.use("/add-item", budgetControllers.addItem);

module.exports = router;

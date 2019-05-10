const express = require("express");

const isAuth = require("../middleware/is-auth");
const budgetControllers = require("../Controllers/budget");

const router = express.Router();

router.get("/get-budget", isAuth, budgetControllers.getUserBudget);

router.put("/add-item", isAuth, budgetControllers.putItem);

router.delete("/delete-item", isAuth, budgetControllers.deleteItem);

router.put("/merge-budget", isAuth, budgetControllers.mergeBudget);

module.exports = router;

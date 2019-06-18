const express = require("express");

const isAuth = require("../middleware/is-auth");
const settingsControllers = require("../Controllers/settings");

const router = express.Router();

router.post("/update-user-bio", isAuth, settingsControllers.updateUserBio);

router.post(
  "/update-user-budget",
  isAuth,
  settingsControllers.updateUserBudgetSettings
);

module.exports = router;

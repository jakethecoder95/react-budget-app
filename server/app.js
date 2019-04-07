const express = require("express");

const { MONGODB_URI } = require("./secrets");

const app = express();

app.use("/", (req, res) => {
  res.statusCode(200).json("hello");
});

app.listen(8000);

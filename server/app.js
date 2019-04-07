const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.statusCode(200).json("hello");
});

app.listen(8000);

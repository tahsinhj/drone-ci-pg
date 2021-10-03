const express = require("express");
const config = require("./config");
const app = express();

app.get("/", (req, res) => {
  res.json({ success: true, msg: config.msg });
});

module.exports = app;

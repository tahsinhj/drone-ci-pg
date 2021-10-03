const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ success: true, msg: "hf-2" });
});

module.exports = app;

var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/json", (req, res) => {
  res.json({
    message: "Hello json"
  });
});

























 module.exports = app;

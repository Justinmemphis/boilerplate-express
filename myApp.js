var express = require('express');
var app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static(__dirname + "/public"));























 module.exports = app;

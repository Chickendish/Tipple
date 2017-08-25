var app = require("express");
var path = require("path");
 // index route loads view.html
 module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
app.get("/list", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/list.html"));
  });


};

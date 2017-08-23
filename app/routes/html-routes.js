 
var path = require("path");
 // index route loads view.html
 module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};

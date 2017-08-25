
var tipple = require("../models/tipple.js");
module.exports = function(app){
	app.get("/api/list", function(req, res) {
    tipple.findAll({}).then(function(results) {
      res.json(results);
    });
  });
}






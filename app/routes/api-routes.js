
var tipple = require("../models/tipple.js");
module.exports = function(app){
	app.get("/api/all", function(req, res) {
		tipple.findAll({}).then(function(results) {
			res.json(results);
		});
		 });
// when a customer wants to search a specific type of cock
  app.get("/api/:cocktails", function(req, res) {
    if (req.params.name) {
      cocktails.findAll({
        where: {
          name: req.params.cocktails
        }
      }).then(function(results) {
        res.json(results);
      });
    }
 

	});
// POST you favorite cocktail
app.post("/api/new/:cocktails", function(req, res) {
	cocktails.create({
		name: req.body.title,
		ingredient1: req.body.ingredient1,
		ingredient2: req.body.ingredient1,
		ingredient3: req.body.ingredient1,
		mixer:req.body.mixer,
		garnish:req.body.garnish,
		measure:req.body.measure

	});
});

}

// this helps to remove the space when the customer put ingidrents (/\s/g, '')




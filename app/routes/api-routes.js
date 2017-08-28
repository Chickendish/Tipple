var request = require('request');

var tipple = require("../models/tipple.js");

module.exports = function(app){
	// app.get("/api/list", function(req, res) {
 //    tipple.findAll({}).then(function(results) {
 //      res.json(results);
 //    });
 //  });
	// app.get('/api/drinks/ingredients/:ingredient', (req, res)=>{
	// 	request('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + req.params.ingredient, function (error, response, body) {
 //  			console.log('error:', error); // Print the error if one occurred 
 //  			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
 //  			console.log('body:', body); // Print the HTML for the Google homepage. 
 //  			res.json(body);
	// 	});

	// });

	app.get("/api/all", function(req, res) {
		tipple.findAll({}).then(function(results) {
			res.json(results);
		});
		 });
// when a customer wants to search a specific type of cocktail
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
		ingredient2: req.body.ingredient2,
		ingredient3: req.body.ingredient3,
		ingredient4:req.body.ingredient4,
		ingredient5:req.body.ingredient5,
		ingredient6:req.body.ingredient6,
		Instruction:req.body.Instruction

	});
});

}

// this helps to remove the space when the customer put ingidrents (/\s/g, '')




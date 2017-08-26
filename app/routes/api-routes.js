var request = require('request');

var tipple = require("../app/models/tipple.js");
module.exports = function(app){
	app.get("/api/list", function(req, res) {
    tipple.findAll({}).then(function(results) {
      res.json(results);
    });
  });
	app.get('/api/drinks/ingredients/:ingredient', (req, res)=>{
		request('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + req.params.ingredient, function (error, response, body) {
  			console.log('error:', error); // Print the error if one occurred 
  			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  			console.log('body:', body); // Print the HTML for the Google homepage. 
  			res.json(body);
		});

	});
}






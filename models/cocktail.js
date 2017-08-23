// Dependencies
// =============================================================
// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Book" model that matches up with DB
var cocktail = sequelize.define("cocktail", {
  name: {
    type: Sequelize.STRING
  },
  ingredient1: {
    type: Sequelize.STRING
  },
  ingredient2: {
    type: Sequelize.STRING
  },
  ingredient3: {
    type: Sequelize.STRING
  },
  mixer: {
    type: Sequelize.STRING
  },
  garnish: {
    type: Sequelize.STRING
  },
  measure: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});
// Syncs with DB
tipple.sync();
// Makes the cocktail Model available for other files (will also create a table)
module.exports = Drink;
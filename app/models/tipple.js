
// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");

// Create a cocktails table on tipple database

var tipple = sequelize.define("cocktail", {
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },

  name: {
    type:Sequelize.STRING,
  },
  ingredient1: {
   type:Sequelize.STRING
  },
  ingredient2: {
    type:Sequelize.STRING
  },

  ingredient3: {
    type:Sequelize.STRING
  },

  mixer: {
    type:Sequelize.STRING
  },
  garnish: {
    type:Sequelize.STRING
  },
  measure: {
    type:Sequelize.INTEGER
}

},
{
  timestamps: true
});
// Sync
tipple.sync({
  force: true
}).then(function() {
  tipple.create({
    name: "Whiskey Sour",
    ingredient1: "Whiskey",
    ingredient2: "grated ginger",
    ingredient3: "",
    mixer: "Ginger Ale",
    garnish: "",
    measure: "0.25"
  });
  tipple.create({
    name: "Whiskey Sour",
    ingredient1: "Whiskey",
    ingredient2: "grated ginger",
    ingredient3: "",
    mixer: "Ginger Ale",
    garnish: "",
    measure: "0.25"
  });
});
// Export
module.exports = tipple;

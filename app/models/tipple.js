
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

  strDrink: {
    type:Sequelize.STRING,
    validate: {
      notNull: true,
      isAlphanumeric: true
    }
  },

  strInstructions: {
    type:Sequelize.TEXT
  },

  strIngredient1: {
   type:Sequelize.STRING
  },

  strIngredient2: {
    type:Sequelize.STRING
  },

  strIngredient3: {
    type:Sequelize.STRING
  },

  strIngredient4: {
    type:Sequelize.STRING
  },

  strIngredient5: {
   type:Sequelize.STRING
  },

  strIngredient6: {
   type:Sequel
  },
 
  strMeasure1: {
    type:Sequelize.INTEGER
  },

  strMeasure2: {
    type:Sequelize.INTEGER
  },

  strMeasure3: {
    type:Sequelize.INTEGER
  },

  strMeasure4: {
    type:Sequelize.INTEGER
  },

  strMeasure5: {
    type:Sequelize.INTEGER
  },

  strMeasure6: {
    type:Sequelize.INTEGER
  },

  {
  timestamps: true
  }
});

// Sync
tipple.sync({
  force: true
}).then(function() {
  tipple.create({
    strDrink: "Whiskey Sour",
    strIngredient1: "Whiskey",
    strIngredient2: "grated ginger",
    strIngredient3: "",
    strIngredient4: "Ginger Ale",
    strIngredient5: "",
    strMeasure1: "0.25"
  });
  tipple.create({
    strDrink: "Whiskey Sour",
    strIngredient1: "Whiskey",
    strIngredient2: "grated ginger",
    strIngredient3: "",
    strIngredient4: "Ginger Ale",
    strIngredient5: "",
    strMeasure1: "0.25"
  });
});
// Export
module.exports = tipple;


// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");
// Create a recipe table on homemade database 
var tipple = sequelize.define("cocktail", {
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
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

  ingredient4: { 
    type:Sequelize.STRING
  }, 
  ingredient5: { 
    type:Sequelize.STRING
  },
  ingredient6: { 
    type:Sequelize.STRING
}

}, 
{
  timestamps: true
});
// Sync 
tipple.sync();
// Export 
module.exports = tipple;

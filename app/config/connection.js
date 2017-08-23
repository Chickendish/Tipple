
// Dependencies
var Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("homemade", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

<<<<<<< HEAD:app/config/connection.js
=======
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
>>>>>>> 0c9ed88a515893a72054e76be2cecc8c39b29393:config/connection.js

// Exports the connection for other files to use
module.exports = sequelize;

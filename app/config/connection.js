
// Dependencies
var Sequelize = require("sequelize");
// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("tipple", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

if (process.env.JAWSDB_URL){
  connection = sequelize.createConnection(process.env.JAWSDB_URL);
} else {
  connection = sequelize.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tipple'
  });
};


// Exports the connection for other files to use
module.exports = sequelize;


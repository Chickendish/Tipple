

<<<<<<< HEAD
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
// tipple.sync({
//   force: true
// }).then(function() {
//   tipple.create({
//     name: "Whiskey Sour",
//     ingredient1: "Whiskey",
//     ingredient2: "grated ginger",
//     ingredient3: "",
//     mixer: "Ginger Ale",
//     garnish: "",
//     measure: "0.25"
//   });
//   tipple.create({
//     name: "Bloody Mary",
//     ingredient1: "Whiskey",
//     ingredient2: "grated ginger",
//     ingredient3: "",
//     mixer: "Ginger Ale",
//     garnish: "",
//     measure: "0.25"
//   });
// });
// Export
module.exports = tipple;
=======
>>>>>>> 196026aeaa4cddd697122595ba7bcc7ac9bdb7e5

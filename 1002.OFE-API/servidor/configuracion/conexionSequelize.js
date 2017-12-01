var Sequelize = require('sequelize');

var sequelize = new Sequelize('dbFacturacion', null, null, {
    dialect: "sqlite",
    storage: './1002.OFE-DATABASE/dbPrueba.sqlite',
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
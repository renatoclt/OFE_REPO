sequelize = require('./../../configuracion/conexion');
Sequelize = require("sequelize");

var Producto = sequelize.define('User', { 
    UserId: {
      type: Sequelize.INTEGER,
      unique:true,
      primaryKey: true
    },
    FirstName: Sequelize.TEXT,
    LastName: Sequelize.INTEGER,
    Age: Sequelize.INTEGER
  },{
  tableName: 'User',
  timestamps: false
});

module.exports = Producto;
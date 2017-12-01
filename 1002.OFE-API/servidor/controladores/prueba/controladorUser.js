var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var UserDTO = require("../../dto/prueba/UserDTO");

// sequelize = require('./../../configuracion/conexionSequelize');
// var Sequelize = require('sequelize');

// sequelize.sync()
// .then(function() {
//   User.findById(1).then(function(article){
//     console.log("aajjaa");
//     console.log(article);
//   });
// }, function (err) {
//   console.log('An error occurred while creating the table:', err);
// });

router.get('/', function(req, res, next) {
  console.log("sajjajajja");
    UserDTO.buscarProducto(1);
    res.json({ mensaje: 'Bienvenido a nuestra api de Offline!' });    
});

module.exports = router;

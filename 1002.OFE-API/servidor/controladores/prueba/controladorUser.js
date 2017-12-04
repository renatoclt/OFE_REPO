var express = require('express');
var router = express.Router();
var UserDTO = require("../../dtos/prueba/UserDTO");

router.get('/', function(req, res, next) {
  console.log("sajjajajja");
    UserDTO.buscarProducto(1).then(function(user){
      res.json(user);   
    });
});

module.exports = router;

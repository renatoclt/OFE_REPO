var express = require('express');
var router = express.Router();
knex = require('./../../configuracion/conexionPrueba');

router.get('/', function(req, res, next) {

    let result = knex.select("FirstName").from("User");

    result.then(function(rows){
        res.json(rows);
    })
    .catch(function(reason) {
        res.json({"mensaje":"error al conectar a la base de datos"});	
    });

});

module.exports = router;
router = require('express').Router();
ProductoDTO = require("../../dtos/producto/productoDTO");

router.get('/', function(req, res, next) {
    ProductoDTO.todos().then(function(productos){
        res.json(productos);   
    });
});

module.exports = router;
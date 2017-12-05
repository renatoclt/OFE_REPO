router = require('express').Router();
var hateoas = require('../../utilitarios/hateoas')({baseUrl: "http://localhost:3000/v1",nombreColeccion: "productoes"});
ProductoDTO = require("../../dtos/producto/productoDTO");


hateoas.registerLinkHandler("user", function(user) {
    var links = {
        "self": "/users/" + user.id,
    };
    return links;
});

hateoas.registerCollectionLinkHandler("user", function(userCollection) {
    var links = {
        "self": "/users"
    };
    
    return links;
});



router.get('/', function(req, res, next) {
    ProductoDTO.todos().then(function(productos){
        console.log(productos);
        res.json(hateoas.link("user", productos));   
    });
    
    
});

module.exports = router;
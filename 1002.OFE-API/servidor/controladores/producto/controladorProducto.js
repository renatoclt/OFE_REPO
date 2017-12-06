var hateoas = require('../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
var ProductoDTO = require("../../dtos/producto/productoDTO");

var controladorProducto = function (ruta){ 

    hateoas.registerLinkHandler("user", function (user) {
        var links = {
            "self": "/users/" + user.id,
            "mi": 3
        };
        return links;
    });
    
    hateoas.registerCollectionLinkHandler("user", function (userCollection) {
        var links = {
            "self": "/users"
        };
    
        return links;
    });
    
    router.get(ruta.concat('/'), function (req, res, next) {

        var regxpag = 10,
            totalreg = 5,
            pagina = 0;
    
        if (req.query.pagina) {
            pagina = req.query.pagina;
        }
        if (req.query.limite) {
            regxpag = req.query.limite;
        }
    
        ProductoDTO.todos().then(function (productos) {
            console.log(productos);
            res.json(hateoas.link("user", productos, "productoes", "productos", regxpag, totalreg, pagina));
        });
    });
    
    router.get(ruta.concat('/:id'), function (req, res, next) {
        ProductoDTO.buscarProducto(req.params.id).then(function(producto){
            res.json(hateoas.link("user",producto));
        });

    });
};

module.exports = controladorProducto;
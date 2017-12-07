var ProductoDTO = require("../../dtos/producto/productoDTO");

var controladorProducto = function (ruta, rutaEsp){ 
    var nombreHateo = "hProducto";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });

    hateoas.registerLinkHandler(nombreHateo, function (objecto) {
        var links = {
            "self": rutaEsp.concat('/') + objecto.id
        };
        return links;
    });
    
    hateoas.registerCollectionLinkHandler(nombreHateo, function (objectoCollection) {
        var links = {
            "self": rutaEsp
        };
        return links;
    });

    router.get(ruta.concat('/'), function (req, res, next) {
        var regxpag = 10
            pagina = 0;
    
        if (req.query.pagina) {
            pagina = req.query.pagina;
        }
        if (req.query.limite) {
            regxpag = req.query.limite;
        }
    
        ProductoDTO.todos(pagina, regxpag).then(function (resDTO) {
            res.json(hateoas.link(nombreHateo, resDTO.productos, "productoes", rutaEsp, regxpag, resDTO.cantidadReg, pagina, false));
        });
    });
    
    router.get(ruta.concat('/:id'), function (req, res, next) {
        ProductoDTO.buscarProducto(req.params.id).then(function(producto){
            res.json(hateoas.link(nombreHateo,producto));
        });
    });

    router.get(ruta.concat('/search'), function (req, res, next) {
        ProductoDTO.buscarProducto(req.params.id).then(function(producto){
            res.json(hateoas.link(nombreHateo,producto));
        });
    });
};

module.exports = controladorProducto;
var TipoAfecIgvDTO = require("../../dtos/configuracion/tipoAfecIgvDTO");

var contoladorTipoafectacionigv = function (ruta, rutaEsp){ 
    var nombreHateo = "hTipoafectacionigv";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');

    hateoas.registerLinkHandler(nombreHateo, function (objecto) {
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+rutaEsp.concat('/') + objecto.idTipoAfectacion
            }
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
    
        TipoAfecIgvDTO.todos().then(function (resDTO) {
            var hateoasObj_producto = Object.assign({},hateoasObj);
            hateoasObj_producto.type = nombreHateo;
            hateoasObj_producto.data = resDTO;
            hateoasObj_producto.nombreColeccion = "tipoAfectacionIgvRedises";
            hateoasObj_producto.ruta = rutaEsp;
            hateoasObj_producto.paginacion.activo = false;
            hateoasObj_producto.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_producto));
        });
    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        
        TipoAfecIgvDTO.buscarProductoId(req.params.id).then(function (resDTO) {
            var hateoasObj_producto = Object.assign({},hateoasObj);
            hateoasObj_producto.type = nombreHateo;
            hateoasObj_producto.data = resDTO;
            hateoasObj_producto.paginacion.activo = false;
            hateoasObj_producto.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_producto));
        });
    });
};

module.exports = contoladorTipoafectacionigv;
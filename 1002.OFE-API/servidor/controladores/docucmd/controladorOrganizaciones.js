var EntidadQueryDTO = require("../../dtos/msdocucmd/EntidadQueryDTO");
var baseUrl_ = "http://localhost:3000/v1";
var controladorQueryEntidades = function (ruta, rutaEsp) {
        var nombreHateo = "hOrganizaciones";
        var hateoas = require('./../../utilitarios/hateoas')({ baseUrl:baseUrl_});
        var hateoasObj = require('./../../utilitarios/hateoasObj');
    
    hateoas.registerLinkHandler(nombreHateo, function (objecto) {
        var links = {
           "self":{
                    "href":baseUrl_+ rutaEsp.concat('/') + objecto.documento+'?idTipoDocumento='+objecto.idTipoDocumento
           }
        };
        
        return links;
    });

    hateoas.registerCollectionLinkHandler(nombreHateo, function (objectoCollection) {
        var links = {
            //"self": rutaEsp
            "self": {
                "href": baseUrl_+ rutaEsp+'/'
            }
        };
       
        return links;
    });

    router.get(ruta.concat('//?'), function (req, res, next) {

        if (req.query.denominacion == undefined || req.query.idTipoDocumento == undefined) {
            res.status(400).send('Solicitud incorrecta: Revisar parametros error de peticion');
        } else {
            var denominacion = "",
                idTipoDocumento = "-1",
                page = 0,
                size = 5;

            if (req.query.denominacion && req.query.denominacion != "") {
                denominacion = req.query.denominacion;
            }
            if (req.query.idTipoDocumento && req.query.idTipoDocumento != "") {
                idTipoDocumento = req.query.idTipoDocumento;
            }
            if (req.query.page && req.query.page > 0) {
                page = req.query.page;
            }
            if (req.query.size && req.query.size > 0) {
                size = req.query.size;
            }

            EntidadQueryDTO.buscarEntidades(idTipoDocumento, denominacion
                , page, size)
                .then(function (resDTO) {
                    if (resDTO.cantidadReg == 0){
                        res.status(404).send(resDTO);
                    }else{
                        var hateoasObj_organizaciones = Object.assign({}, hateoasObj);
                        hateoasObj_organizaciones.type = nombreHateo;
                        hateoasObj_organizaciones.data = resDTO.entidades;
                        hateoasObj_organizaciones.nombreColeccion = "organizacionQueries";
                        hateoasObj_organizaciones.ruta = rutaEsp;
                        hateoasObj_organizaciones.paginacion.activo = true;
                        hateoasObj_organizaciones.paginacion.totalreg = resDTO.cantidadReg;
                        hateoasObj_organizaciones.paginacion.regxpag = size;
                        hateoasObj_organizaciones.paginacion.pagina = page;
                        hateoasObj_organizaciones.busqueda.activo = false;
                        
                        // parametros modificados para hateo
                        var org =hateoas.link(hateoasObj_organizaciones);
                        var hrefcoleccion= org['_links']['self']['href'];   
                        org['_links']['self']['href']=hrefcoleccion+'?denominacion='+denominacion+'&idTipoDocumento='+idTipoDocumento+'&page='+page+'&size='+size;
                        res.status(200).json(org);
                    }
                });
        }


    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        EntidadQueryDTO.buscarEntidadById(req.params.id).then(function (resDTO) {
            
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO;
            hateoasObj_comprobante.paginacion.activo = false;
            hateoasObj_comprobante.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_comprobante));
        })
    });

};

module.exports = controladorQueryEntidades;
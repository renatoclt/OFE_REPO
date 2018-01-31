var EntidadQueryDTO = require("../../dtos/msdocucmd/EntidadQueryDTO");
var baseUrl_="http://localhost:3000/v1";
var controladorQueryEntidades = function (ruta, rutaEsp) {
    var nombreHateo = "hComprobante";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl:baseUrl_});
    var hateoasObj = require('./../../utilitarios/hateoasObj');
/*
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
        RetencionDTO.buscarComprobantes(pagina, regxpag).then(function (resDTO) {

            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "retenciones";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = regxpag;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = false;         
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        RetencionDTO.buscarComprobante(req.params.id).then(function (resDTO) {
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO;
            hateoasObj_comprobante.paginacion.activo = false;
            hateoasObj_comprobante.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });
*/
    router.get(ruta.concat('/organizaciones/?'), function (req, res, next) {

        var denominacion="",
            idTipoDocumento="-1",
            page=0,
            size=5;

        if (req.query.denominacion && req.query.denominacion!=""){
            denominacion = req.query.denominacion;
        }
        if (req.query.idTipoDocumento && req.query.idTipoDocumento!=""){
            idTipoDocumento = req.query.idTipoDocumento;
        }
        if (req.query.page && req.query.page>0){
            page = req.query.page;
        }
        if (req.query.limite && req.query.limite>0){
            limite = req.query.limite;
        }
 
        //function(pagina, regxpag, numeroComprobante_,generado_,estado_,fechaInicio,fechaFin,estadoSincronizado_, ordenar){
            EntidadQueryDTO.buscarEntidades(idTipoDocumento,denominacion,page, size)
        .then(function (resDTO) {
/*
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.comprobantes;
            hateoasObj_comprobante.nombreColeccion = "retenciones";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = limite;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = true; 
            hateoasObj_comprobante.busqueda.parametros = {numeroComprobante:numeroComprobante,generado:generado,estado:estado,estadoSincronizado:estadoSincronizado,fechaInicio:fechaInicio,fechaFin:fechaFin};
            hateoasObj_comprobante.busqueda.ruta = "/search/buscar";        
            res.json(hateoas.link(hateoasObj_comprobante));*/
            res.json(resDTO);
        });
    });

};

module.exports = controladorQueryEntidades;
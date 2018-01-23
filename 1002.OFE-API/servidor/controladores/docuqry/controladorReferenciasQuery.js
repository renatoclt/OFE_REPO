var referenciasQueryDTO = require("../../dtos/msdocuqry/referenciasQueryDTO");

var controladorReferenciasQuery = function (ruta, rutaEsp) {
    var nombreHateo = "hReferenciaQuery";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');

    hateoas.registerLinkHandler(nombreHateo, function (objecto) {
        var links = {
            "self":{  "href":rutaEsp.concat('/') + objecto.inIdocOrigen},

            "tDocReferenciEntity":{"href":rutaEsp.concat('/') + objecto.inIdocOrigen},
            "comprobante":{"href":rutaEsp.concat('/') + objecto.inIdocOrigen+'/comprobante'}
        };
        return links;
    });

    hateoas.registerCollectionLinkHandler(nombreHateo, function (objectoCollection) {
        var links = {
            "self": rutaEsp
        };
        return links;
    });

    



    router.get(ruta.concat('/search/comprobanteID'), function (req, res, next) {

        var comprobanteID="",
            pagina=0,
            limite=0,
            ordenar=0;

        if (req.query.comprobanteID && req.query.comprobanteID!=""){
            comprobanteID = req.query.comprobanteID;
        }
        if (req.query.page && req.query.page>0){
            pagina = req.query.page;
        }
        if (req.query.size && req.query.size>0){
            limite = req.query.size;
        }
        if (req.query.sort && req.query.sort>0){
            ordenar = req.query.sort;
        }
 
        referenciasQueryDTO.buscarReferenciasByComprobante(pagina, limite, comprobanteID,ordenar)
        .then(function (resDTO) {

            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO.referencias;
            hateoasObj_comprobante.nombreColeccion = "tDocReferenciEntities";
            hateoasObj_comprobante.ruta = rutaEsp;
            hateoasObj_comprobante.paginacion.activo = true;
            hateoasObj_comprobante.paginacion.totalreg = resDTO.cantidadReg;
            hateoasObj_comprobante.paginacion.regxpag = limite;
            hateoasObj_comprobante.paginacion.pagina = pagina;
            hateoasObj_comprobante.busqueda.activo = false; 
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });

    router.get(ruta.concat('/:id'), function (req, res, next) {
        referenciasQueryDTO.buscarReferencia(req.params.id).then(function (resDTO) {
            var hateoasObj_comprobante = Object.assign({}, hateoasObj);
            hateoasObj_comprobante.type = nombreHateo;
            hateoasObj_comprobante.data = resDTO;
            hateoasObj_comprobante.paginacion.activo = false;
            hateoasObj_comprobante.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_comprobante));
        });
    });

};

module.exports = controladorReferenciasQuery;
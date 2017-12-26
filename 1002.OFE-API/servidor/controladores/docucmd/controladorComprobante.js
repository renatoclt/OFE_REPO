var ComprobantePago = require('../../dtos/comprobante/comprobantePago');
var DocReferencia = require('../../dtos/comprobante/docReferenciaDto')
var DocEntidad = require('../../dtos/comprobante/docEntidadDTO')
var sequelize = require('sequelize');
var uuid = require('../../utilitarios/uuid')
/**
 * Controlador del
 * 
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos 
 */
var contoladorComprobante =  function (ruta, rutaEsp){ 
    /**
     * Hateo aun no se q hace
     * son 3 variables y 2 funciones
     */
    var nombreHateo = "hMaestras";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');
    hateoas.registerLinkHandler(nombreHateo, function (data) {
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+rutaEsp.concat('/',data.tabla,data.codigo)
            },
            "maestraRedis":{
                "href":  "http://localhost:3000/v1"+rutaEsp.concat('/',data.tabla, data.codigo) 
            }
        };
        return links;
    });
    
    hateoas.registerCollectionLinkHandler(nombreHateo, function (data) {
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+ rutaEsp.concat('/','search/filtros?tabla=',data[0].tabla)
            }
        };
        return links;
    });


    /**
     * Guardaremos documentos 
     * Actualmente solo guarda retenciones 
     * 
     * 
     * 1 await guarda en la tabla comprobante pago
     * 2 await guarda en la tabla docEntidad
     * 3 await guarda en la tabla docReferencia
     * y declaramos una funcion asincrona q espera los datos de la tabla
     */
    router.post(ruta.concat('/'), async function(req, res){
        let transaccion;
        data = req.body;
        data.id = uuid();
        try{
            await ComprobantePago.guardar(data);
            for (let documentoEntidad of req.body.documentoEntidad){
                documentoEntidad.idComprobantePago = 'prueba'
                await DocEntidad.guardar(documentoEntidad);
            }        
            for(let documentoReferencia of req.body.documentoReferencia ){
                documentoReferencia.usuarioCreacion = data.usuarioCreacion;
                documentoReferencia.usuarioModificacion = data.usuarioModificacion;
                documentoReferencia.fechaCreacion = data.fechaCreacion;
                documentoReferencia.fechaModificacion = data.fechaCreacion;
                documentoReferencia.idDocumentoOrigen = 'prueba';
                await DocReferencia.guardar(documentoReferencia);
            }
        }
        catch(err){
            console.log(err);
        }
        //res.status(200).send(data);
        res.json(data);
    })
};

module.exports = contoladorComprobante;
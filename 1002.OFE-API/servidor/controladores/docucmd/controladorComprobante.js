var ComprobantePago = require('../../dtos/comprobante/comprobantePago');
var DocReferencia = require('../../dtos/comprobante/docReferenciaDto')
var DocEntidad = require('../../dtos/comprobante/docEntidadDTO')
var sequelize = require('sequelize');
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
     * y declaramos una funcion asincrona q espera los datos de la tabla
     */
    router.post(ruta.concat('/'), async function(req, res){
        
        for (let documentoEntidad of req.body.documentoEntidad){
            documentoEntidad.idComprobantePago = 'prueba'
            data = await DocEntidad.guardar(documentoEntidad);
        }        
        for(let documentoReferencia of req.body.documentoReferencia ){
            data = await DocReferencia.guardar(documentoReferencia);
            //console.log(documentoReferencia);
        }

            
        //data = await ComprobantePago.guardar();
        //res.status(200).send(data);
        res.send('ok');
    })
};

module.exports = contoladorComprobante;
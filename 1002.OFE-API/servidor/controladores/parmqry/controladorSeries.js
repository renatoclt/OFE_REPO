/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var Serie = require('../../dtos/organizaciones/serieDto');

/**
 * Controlador de la tabla serie 
 * 
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos 
 */
var contoladorSeries =  function (ruta, rutaEsp){ 
    /**
     * Hateo aun no se q hace
     * son 3 variables y 2 funciones
     */
    var nombreHateo = "hSeries";
    var hateoas = require('./../../utilitarios/hateoas')({ baseUrl: "http://localhost:3000/v1" });
    var hateoasObj = require('./../../utilitarios/hateoasObj');
    hateoas.registerLinkHandler(nombreHateo, function (data) {
        var links = {
            "self": {
                "href": "http://localhost:3000/v1"+rutaEsp.concat('/',data.tabla,data.codigo)
            },
            "seriesRedis":{
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
     * Enviamos la ruta 
     * y declaramos una funcion asincrona q espera los datos de la tabla
     */
    router.get(ruta.concat('/search/filtros'), async function (req, res) {
        if (req.query.id_entidad && req.query.id_entidad>0 && req.query.id_tipo_comprobante && req.query.id_tipo_comprobante > 0 && req.query.id_tipo_serie){
            let tabla = req.query.tabla;
            var data = await Serie.filtro(req.query.id_entidad, req.query.id_tipo_comprobante,req.query.id_tipo_serie);  
            var hateoasObj_n = Object.assign({},hateoasObj);
            hateoasObj_n.type = nombreHateo;
            hateoasObj_n.data =  data.map(function (series) {
                return series.dataValues;
            });
            hateoasObj_n.nombreColeccion = "serieRedises";
            hateoasObj_n.ruta = rutaEsp;
            hateoasObj_n.paginacion.activo = false;
            hateoasObj_n.busqueda.activo = false;
            res.json(hateoas.link(hateoasObj_n));
        }
        else{
            res.send('error');
        }
    });
};

module.exports = contoladorSeries;
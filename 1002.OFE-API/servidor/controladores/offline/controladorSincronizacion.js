/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var Sincronizacion = require('../../dtos/msoffline/sincronizacionDTO');
var Evento = require('../../dtos/msoffline/eventoDTO');
var Idioma = require('../../dtos/msoffline/idiomaDTO');
/**
 * Controlador de la tabla serie 
 * 
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos 
 */
var contoladorSincronizacion =  function (ruta, rutaEsp){ 
    
    /**
     * Enviamos la ruta 
     * y declaramos una funcion asincrona q espera los datos de la tabla
     */
    router.get(ruta.concat('/filtros'), async function (req, res) {
        if (req.query.idioma){
            let idioma = req.query.idioma;
            let series = {};
            series._embedded = await Sincronizacion.filtro(idioma);  
            series._embedded.forEach(element => {
                element.fechaSincronizacion = '29/12/2017';
            });            
            res.json(series);
        }
        else{
            res.send('error');
        }
    });
    router.post(ruta.concat('/evento'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoInactivo;
        await Evento.guardar(req.body);
        res.status(200).send('ok');
    });
    router.post(ruta.concat('/idioma'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoInactivo;
        await Idioma.guardar(req.body);
        res.status(200).send('ok');
    });
    
};

module.exports = contoladorSincronizacion;
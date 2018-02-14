/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var ComprobantePago = require('../../dtos/msoffline/comprobantePagoDTO');
var ProductoXComprobantePago = require('../../dtos/msoffline/productoXComprobantePagoDTO');
var archivo = require ('../../dtos/msoffline/archivoDTO') //falta
var DetalleDoc = require('../../dtos/msoffline/detalleDocDTO');
var DocConcepto = require('../../dtos/msoffline/docConcepetoDTO');
var DocEntidad = require('../../dtos/msoffline/docEntidadDTO');
var DocEvento = require('../../dtos/msoffline/docEventoDTO');
var DocParametro = require('../../dtos/msoffline/docParametroDTO');//falta
var DocReferencia = require('../../dtos/msoffline/docReferenciaDTO');
var DocMasivo = require('../../dtos/msoffline/docMasivoDTO');//falta
var DocMasivoDet = require('../../dtos/msoffline/docMasivoDetDTO');//falta
var Concepto = require('../../dtos/msoffline/conceptoDTO')
var DominioDocumento = require('../../dtos/msoffline/dominioDocumentoDTO');
var Evento = require('../../dtos/msoffline/eventoDTO');
var Idioma = require('../../dtos/msoffline/idiomaDTO');
var ParametroDocumento = require('../../dtos/msoffline/parametroDocumentoDTO');
var TipoAfecIgv = require('../../dtos/msoffline/tipoAfecIgvDTO');
var TipoCalcIsc = require('../../dtos/msoffline/tipoCalcIscDTO');
var TipoEntidad = require('../../dtos/msoffline/tipoEntidadDTO');
var TipoPrecioVenta = require('../../dtos/msoffline/tipoPrecioVentaDTO');
var Sincronizacion = require('../../dtos/msoffline/sincronizacionDTO');
var Usuario = require('../../dtos/msoffline/usuarioDTO');//falta comprobar
var DominioEntidad = require('../../dtos/msoffline/dominioEntidadDTO');
var EntidadParametro = require('../../dtos/msoffline/entidadParametroDTO');
var Entidad = require ('../../dtos/msoffline/entidadDTO');
var ParametroEntidad = require('../../dtos/msoffline/parametroEntidadDTO');
var Producto = require('../../dtos/msoffline/productoDTO');
var Serie = require('../../dtos/msoffline/serieDTO');
var QueryComprobanteConcepto = require('../../dtos/msoffline/queryComprobanteConceptoDTO') ; //falta
var QueryComprobanteEvento = require('../../dtos/msoffline/queryComprobanteEventoDTO') ; //falta
var QueryComprobantePago = require('../../dtos/msoffline/queryComprobantePagoDTO') ; //falta
var QueryConcepto = require('../../dtos/msoffline/queryConceptoDTO') ; //falta
var QueryDocParametros = require('../../dtos/msoffline/queryDocParametroDTO') ; //falta
var QueryDocRefenci = require('../../dtos/msoffline/docReferenciaDTO') ; //falta
var QueryDocMasivo = require('../../dtos/msoffline/queryDocMasivoDTO') ; //falta
var QueryDocMasivoDet = require('../../dtos/msoffline/queryDocMasivoDetDTO') ; //falta
var QueryEntParametros = require('../../dtos/msoffline/queryEntParametrosDTO') ; //falta
var QueryEntidad = require('../../dtos/msoffline/queryEntidadDTO') ; //falta
var QueryEstComprobante = require('../../dtos/msoffline/queryEstComprobanteDTO') ; //falta
var QueryIdioma = require('../../dtos/msoffline/queryIdiomaDTO') ; //falta
var QueryParametroDominioDoc = require('../../dtos/msoffline/queryParametroDominioDocDTO') ; //falta
var QueryParametroDominioEnt = require('../../dtos/msoffline/queryParametroDominioEntDTO') ; //falta
var QueryProducto = require('../../dtos/msoffline/queryProductoDTO') ; //falta
var QueryProductoXComprobantePago = require('../../dtos/msoffline/queryProductoXComprobantePagoDTO') ;  //falta
var QuerySerie = require('../../dtos/msoffline/querySerieDTO') ;  //falta
var QueryTipoAfecIgv = require('../../dtos/msoffline/queryTipoAfecIgvDTO') ; //falta
var QueryTipoCalcIsc = require('../../dtos/msoffline/queryTipoCalcIscDTO') ; //falta
var QueryTipoPrecVen = require('../../dtos/msoffline/queryTipoPrecVenDTO') ;  //falta
var Maestra = require('../../dtos/msoffline/maestraDTO');

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

    router.post(ruta.concat('/usuario'), async function(req, res){  
        req.body.forEach(async element => {      
            await Usuario.registrarUsuario(element);
            res.status(200).send('{}');
        })
    });
        
    router.post(ruta.concat('/parametroEntidad'), async function(req, res){        
        req.body.forEach(async element => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estado  = constantes.estadoActivo;
            await ParametroEntidad.guardar(element);
            res.status(200).send('{}');
        });

    });

    //querySerie
    router.post(ruta.concat('/querySerie'), async function(req, res){
        req.body.forEach(async element => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estado  = constantes.estadoActivo;
            await QuerySerie.guardar(element);
            }
        );
        res.status(200).send('{}');
    });


    //fe_configuracion_t_evento
    router.post(ruta.concat('/evento'), async function(req, res){
        req.body.forEach(async element => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estado  = constantes.estadoActivo;
            await Evento.guardar(element);
            }
        );
        res.status(200).send('{}');
    });

    //fe_configuracion_t_idioma
    router.post(ruta.concat('/idioma'), async function(req, res){
        console.log(req.body);
        req.body.forEach(async element => {
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estado  = constantes.estadoActivo;
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            await Idioma.guardar(element);
            res.status(200).send('{}');
        }) 
    });

    //QueryIdioma
    //fe_configuracion_t_idioma
    router.post(ruta.concat('/queryIdioma'), async function(req, res){
        req.body.forEach(async element => {
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estado  = constantes.estadoActivo;
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            await QueryIdioma.guardar(element);
            res.status(200).send('{}');
        }) 
    });

    //fe_query_t_idioma
    router.post(ruta.concat('/queryEntidad'), async function(req, res){
        req.body.forEach(async element => {
            element.usuarioCreacion = constantes.usuarioOffline;
            element.usuarioModificacion = constantes.usuarioOffline;
            await QueryEntidad.guardar(element);
            res.status(200).send('{}');
        }) 
    });

    //FALTA dominio entidad 
    router.post(ruta.concat('/dominioEntidad'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DominioEntidad.guardar(req.body);
        res.status(200).send('{}');
    });


    router.post(ruta.concat('/maestra'), async function(req, res){
        req.body.forEach(async element => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            element.tipo = constantes.vacio;
            element.equivalencia = constantes.vacio;
            element.orden = constantes.vacio;
            element.default = constantes.vacio;
            element.idTablaPadre = constantes.vacio;
            element.registroPadre = constantes.vacio;
            element.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");;
            element.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");;
            element.portal = constantes.vacio;
            element.perfil = constantes.vacio;
            await Maestra.guardar(element);
            res.status(200).send('{}');
        });
    });


    router.post(ruta.concat('/tipoEntidad'), async function(req, res){
        req.body.forEach(async element => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            await TipoEntidad.guardar(element);
            res.status(200).send('{}');
        });
    });

    router.post(ruta.concat('/entidad'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        req.body.usuarioCreacion = constantes.usuarioOffline;
        req.body.usuarioOffline = constantes.usuarioOffline;
        req.body.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        await Entidad.guardar(req.body);
        res.status(200).send('{}');
    });

    router.post(ruta.concat('/queryEstado'), async function(req, res){
        req.body.forEach(async element => {
            element.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
            element.estadoSincronizado =  constantes.estadoActivo;
            await QueryEstComprobante.guardar(element);
            res.status(200).send('{}');
        });
    });


    router.post(ruta.concat('/dominioDocumento'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DominioDocumento.guardar(req.body);
        res.status(200).send('{}');
    });    



    router.post(ruta.concat('/concepto'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await Concepto.guardar(req.body);
        res.status(200).send('{}');
    }); 
    router.post(ruta.concat('/parametroDocumento'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await ParametroDocumento.guardar(req.body);
        res.status(200).send('{}');
    });
    router.post(ruta.concat('/tipoAfecIgv'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await TipoAfecIgv.guardar(req.body);
        res.status(200).send('{}');
    });
    router.post(ruta.concat('/tipoCalcIsc'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await TipoCalcIsc.guardar(req.body);
        res.status(200).send('{}');
    });
    
    router.post(ruta.concat('/tipoPrecioVenta'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await TipoPrecioVenta.guardar(req.body);
        res.status(200).send('{}');
    });
    
    router.post(ruta.concat('/entidadParametro'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await EntidadParametro.guardar(req.body);
        res.status(200).send('{}');
    });
    
    router.post(ruta.concat('/parametroEntidad'), async function(req, res){
        
    });
    router.post(ruta.concat('/serie'), async function(req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await Serie.guardar(req.body);
        res.status(200).send('{}');
    });
    
    router.post(ruta.concat('/comprobantePago'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        req.body.estadoComprobantePago = 1;
        await ComprobantePago.guardar(req.body);
        res.status(200).send('{}');
    });   
    router.post(ruta.concat('/producto'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await Producto.guardar(req.body);
        res.status(200).send('{}');
    });   
    router.post(ruta.concat('/ProductoXComprobantePago'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await ProductoXComprobantePago.guardar(req.body);
        res.status(200).send('{}');
    });   
    router.post(ruta.concat('/detalleDoc'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DetalleDoc.guardar(req.body);
        res.status(200).send('{}');
    });   
    router.post(ruta.concat('/docConcepto'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DocConcepto.guardar(req.body);
        res.status(200).send('{}');
    }); 
    router.post(ruta.concat('/docEntidad'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DocEntidad.guardar(req.body);
        res.status(200).send('{}');
    }); 
    router.post(ruta.concat('/docEvento'), async function (req, res){
        req.body.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
        req.body.estadoSincronizado =  constantes.estadoActivo;
        await DocEvento.guardar(req.body);
        res.status(200).send('{}');
    });
};

module.exports = contoladorSincronizacion;
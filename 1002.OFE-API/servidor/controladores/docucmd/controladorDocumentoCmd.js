var Documento = require('../../dtos/msdocucmd/documentoDTO');
var DocumentoEntidad = require('../../dtos/msdocucmd/documentoEntidadDTO');
var DocumentoReferencia = require('../../dtos/msdocucmd/documentoReferenciaDTO');   
var uuid = require('../../utilitarios/uuid');
var NumeroALetras = require('../../utilitarios/numerosALetras');
var archivo = require('../../dtos/msoffline/archivoDTO');
var Serie = require('../../dtos/msparametrosquery/serieDto')
/**
 * Controlador del
 * 
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos 
 */
var contoladorComprobante =  function (ruta, rutaEsp){ 
        /**
         * Guardaremos documentos 
         * Actualmente solo guarda retenciones 
         * 
         * 1 await guarda en la tabla comprobante pago
         * 2 await guarda en la tabla docEntidad
         * 3 await guarda en la tabla docReferencia
         * y declaramos una funcion asincrona q espera los datos de la tabla
         * //falta guardar in_idusuarioproveedor
         * falta en la tabla T_comprobante
         * rucproveedor añadir PE   
         * RUCCOMPRADOR añadir PE
         * idUsuarioCreacion //ya funciona lo añadi en la cabezera del servicio
         * idUsuarioModifiacion //ya funciona lo añadi en la cabezera del servicio
         * funcion de convertir a letras
         * //falta en la tabla t_doc_entidad
         * usuario creacion
         * usuario modificacion
         * //guardar documento referencia
         * usuario creacion
         * usuario modificacion
         */
    router.post(ruta.concat('/guardarRetencion'), async function(req, res){
        data = req.body
        data.id = uuid();
        try{
            data.fechaEmision = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
            data.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaRegistro = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.idOrganizacionProveedora = req.headers.org_id;
            data.idProveedor = req.headers.org_id;
            data.idUsuarioCreacion = req.headers.user_id;
            data.idUsuarioModificacion = req.headers.user_id;
            data.flagOrigenComprobante = 'p';
            data.estadoComprobante = '-1';
            data.flagOrigenCreacion = '1';
            data.estado = 'Guardado Local';
            data.version = 1;
            data.tipoFactura = 'M';
            data.igv = 0;
            data.isc = 0;
            data.otrosTributos = 0; 
            data.descuento = 0;
            data.totalcomprobante = 0;
            data.importeReferencial =  data.totalComprobante;
            data.subtotalComprobante = 0;
            data.montoComprobante = NumeroALetras.numeroALetras(100);
            data.idindicadorImpuesto = 0;
            data.impuestoGvr = 0;
            data.generado = 0;
            data.estadoSincronizado = 0;
            data.porcentajeImpuesto = 0;
            data.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.numeroComprobante = data.numeroComprobante + '-' + await buscarCorrelativo(data.idTipoComprobante, data.numeroComprobante, constantes.estadoOffline , 4);
            await Documento.guardar(data);
            for (let documentoEntidad of req.body.documentoEntidad){
                documentoEntidad.idComprobante = data.id;
                documentoEntidad.usuarioCreacion = 'Usuario creacion';
                documentoEntidad.usuarioModifica = 'Usuario Modificacion';
                documentoEntidad.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoEntidad.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoEntidad.estado = constantes.estadoActivo;
                documentoEntidad.estadoSincronizado = constantes.estadoInactivo;
                documentoEntidad.generado = constantes.estadoInactivo;
                await DocumentoEntidad.guardarEntidad(documentoEntidad);
            }        
            for(let documentoReferencia of req.body.documentoReferencia ){
                documentoReferencia.idDocumentoOrigen = data.id;
                documentoReferencia.idDocumentoDestino = documentoDestino();
                documentoReferencia.usuarioCreacion ='Usuario creacion';
                documentoReferencia.usuarioModifica = 'Usuario Modificacion';
                documentoReferencia.fechaEmisionDestino =  dateFormat(new Date(), "yyyy-mm-dd");
                documentoReferencia.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoReferencia.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoReferencia.anticipo = 0;
                documentoReferencia.estado = constantes.estadoActivo;
                documentoReferencia.estadoSincronizado = constantes.estadoInactivo;
                documentoReferencia.generado = constantes.estadoInactivo;
                await DocumentoReferencia.guardar(documentoReferencia);
            }
            //await listarDocumento;
            await guardarArchivo(data.id);
            res.json(data);
        }
        catch(err){
            res.status(500).send('error');
            console.log('error al ingresar' + err);
        }
    })
    router.post(ruta.concat('/guardarDocumentoEntidad'), async function(req, res){
        data = req.body
        data.id = uuid();
        try{
            data.fechaEmision = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
            data.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaRegistro = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.idOrganizacionProveedora = req.headers.org_id;
            data.idProveedor = req.headers.org_id;
            data.idUsuarioCreacion = req.headers.user_id;
            data.idUsuarioModificacion = req.headers.user_id;
            data.flagOrigenComprobante = 'p';
            data.estadoComprobante = '-1';
            data.flagOrigenCreacion = '1';
            data.estado = 'Guardado Local';
            data.version = 1;
            data.tipoFactura = 'M';
            data.igv = 0;
            data.isc = 0;
            data.otrosTributos = 0; 
            data.descuento = 0;
            data.totalcomprobante = 0;
            data.importeReferencial =  data.totalComprobante;
            data.subtotalComprobante = 0;
            data.montoComprobante = NumeroALetras.numeroALetras(100);
            data.idindicadorImpuesto = 0;
            data.impuestoGvr = 0;
            data.generado = 0;
            data.estadoSincronizado = 0;
            data.porcentajeImpuesto = 0;
            data.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            await Documento.guardar(data);
            let i = 0;
            for (let documentoEntidad of req.body.documentoEntidad){
                i = i+1;
                documentoEntidad.id = i;
                documentoEntidad.idComprobante = data.id;
                documentoEntidad.usuarioCreacion = 'Usuario creacion';
                documentoEntidad.usuarioModifica = 'Usuario Modificacion';
                documentoEntidad.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoEntidad.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                documentoEntidad.estado = constantes.estadoActivo;
                documentoEntidad.estadoSincronizado = constantes.estadoInactivo;
                documentoEntidad.generado = constantes.estadoInactivo;
                DocumentoEntidad.guardarBien(documentoEntidad);
                //await DocumentoEntidad.guardar(documentoEntidad);
            }    
            res.json(data);
        }
        catch(err){
            res.status(500).send('error');
            console.log('error al ingresar' + err);
        }
    });

    
};

async function buscarCorrelativo(tipoComprobante, serie, tipoSerie , entidad){
    let correlativo = 0;
    try{
        let data  = await Serie.buscarSerie(tipoComprobante, serie, tipoSerie , entidad); 
        correlativo = parseInt(data[0].dataValues.correlativo) + 1;
        console.log(data[0].dataValues.idSerie);
        await Serie.acturalizarCorrelativo(data[0].dataValues.idSerie , correlativo);
    }
    catch(e){
        console.log(e);
        correlativo = 1
    }
    return zfill(correlativo,8);
}

async function guardarArchivo(id){
    data.id = id;
    data.archivo = "0500"
    data.usuarioCreacion = constantes.usuarioOffline;
    data.usuarioModificacion = constantes.usuarioOffline;
    data.fechaCreacion =  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");;
    data.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");;
    data.estado = parseInt(constantes.estadoActivo) ;
    data.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");;
    data.estadoSincronizado = parseInt(constantes.estadoInactivo);
    await archivo.guardar(data);
}

function documentoDestino(serie ,correlativo){
    //buscar documento por serie y correlativo
    return null;
}

function zfill(number, width) {
    var numberOutput = Math.abs(number); /* Valor absoluto del número */
    var length = number.toString().length; /* Largo del número */ 
    var zero = "0"; /* String de cero */  
    
    if (width <= length) {
        if (number < 0) {
             return ("-" + numberOutput.toString()); 
        } else {
             return numberOutput.toString(); 
        }
    } else {
        if (number < 0) {
            return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
        } else {
            return ((zero.repeat(width - length)) + numberOutput.toString()); 
        }
    }
}


module.exports = contoladorComprobante;
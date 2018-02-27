var Documento = require('../../dtos/msdocucmd/documentoDTO');
var DocumentoEntidad = require('../../dtos/msdocucmd/documentoEntidadDTO');
var DocumentoReferencia = require('../../dtos/msdocucmd/documentoReferenciaDTO');   
var uuid = require('../../utilitarios/uuid');
var NumeroALetras = require('../../utilitarios/numerosALetras');
var archivo = require('../../dtos/msoffline/archivoDTO');
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
            guardarArchivo(data.id);
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

async function guardarArchivo(id){
    console.log('ingreseee');
    data.id = id;
    data.archivo = "data:image/png;base64,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"
    data.usuarioCreacion = constantes.usuarioOffline;
    data.usuarioModificacion = constantes.usuarioOffline;
    data.fechaCreacion =  dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");;
    data.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");;
    data.estado = constantes.estadoActivo;
    data.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");;
    data.estadoSincronizado = constantes.estadoInactivo;
    await archivo.guardar(data);
}

function documentoDestino(serie ,correlativo){
    //buscar documento por serie y correlativo
    return null;
}


module.exports = contoladorComprobante;
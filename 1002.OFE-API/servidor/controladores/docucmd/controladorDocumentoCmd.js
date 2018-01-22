var Documento = require('../../dtos/msdocucmd/documentoDTO');
var DocumentoEntidad = require('../../dtos/msdocucmd/documentoEntidadDTO');
var DocumentoReferencia = require('../../dtos/msdocucmd/documentoReferenciaDTO');   
var uuid = require('../../utilitarios/uuid');
var NumeroALetras = require('../../utilitarios/numerosALetras');
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
        data = req.body;
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
                await DocumentoEntidad.guardar(documentoEntidad);
            }        
            for(let documentoReferencia of req.body.documentoReferencia ){
                documentoReferencia.idDocumentoOrigen = data.id;
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
            res.json(data);
        }
        catch(err){
            res.status(500).send('error');
            console.log('error al ingresar' + err);
        }
    })
};

module.exports = contoladorComprobante;
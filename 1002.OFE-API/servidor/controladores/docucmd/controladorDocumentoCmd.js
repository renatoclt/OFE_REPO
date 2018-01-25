var Documento = require('../../dtos/msdocucmd/documentoDTO');
var uuid = require('../../utilitarios/uuid');
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
     * in_idorganizacionproveedora
     * rucproveedor añadir PE   
     * RUCCOMPRADOR añadir PE
     * idUsuarioCreacion 
     * idUsuarioModifiacion 
     */
    router.post(ruta.concat('/guardarRetencion'), async function(req, res){
        data = req.body
        data.id = uuid();
        try{
            
            data.fechaEmision = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
            data.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaRegistro = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
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
            data.montoComprobante = data.totalComprobante;
            data.idindicadorImpuesto = 0;
            data.impuestoGvr = 0;
            await Documento.guardar(data);
            for (let documentoEntidad of req.body.documentoEntidad){
                documentoEntidad.idComprobantePago = data.id;
                await DocEntidad.guardar(documentoEntidad);
            }        
            // for(let documentoReferencia of req.body.documentoReferencia ){
            //     documentoReferencia.idDocumentoOrigen = data.id;
            //     documentoReferencia.usuarioCreacion = data.usuarioCreacion;
            //     documentoReferencia.usuarioModificacion = data.usuarioModificacion;
            //     documentoReferencia.fechaCreacion = data.fechaCreacion;
            //     documentoReferencia.fechaModificacion = data.fechaCreacion;
            //     await DocReferencia.guardar(documentoReferencia);
            // }
            // await listarDocumento;
            res.json(data);
        }
        catch(err){
            res.status(500).send('error');
            console.log('error al ingresar' + err);
        }
        //res.status(200).send(data);
        
    })

};

module.exports = contoladorComprobante;
var RetencionBajaDTO = require('../../dtos/comprobante/retencionBajaDTO');
var uuid = require('../../utilitarios/uuid');
var DocReferencia = require('../../dtos/comprobante/docReferenciaDto');
/**
 *  Controlador de RETENCIONES BAJA
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos
 */

var controladorBaja = function (ruta,rutaEsp){
    router.post(ruta.concat('/comunicacionesDeBaja'), async function(req,res){
        var data = req.body;
        data.id = uuid();
        try{
            data.rucComprador = ' ';
            data.numeroComprobante= ' ';
            data.fechaEmision = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
            data.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaRegistro = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.flagOrigenComprobante = 'p';
            data.estadoComprobante = '-1';
            data.flagOrigenCreacion = '1';
            data.estado = 'Baja';
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
            await RetencionBajaDTO.BajaRetencion(data);
            for (let detalleBaja of data.detalleBaja){
                detalleBaja.idComprobantePago = data.id;
                detalleBaja.idEntidad = data.idEntidad;
                detalleBaja.fechaCreacion = data.fechaCreacion;
                detalleBaja.fechaModificacion = dateFormat(new Date(),"yyyy-mm-dd HH:MM:ss.l");
                detalleBaja.usuarioCreacion = req.headers.usuario;
                detalleBaja.usuarioModificacion = req.headers.usuario;
                detalleBaja.idTipoEntidad = data.idTipoComprobante;
                await DocEntidad.guardar(detalleBaja);
            }        
            for(let documentoReferencia of req.body.documentoReferencia ){
                 documentoReferencia.idDocumentoOrigen = data.id;
                 documentoReferencia.usuarioCreacion = req.headers.usuario;
                 documentoReferencia.usuarioModificacion = req.headers.usuario;
                 documentoReferencia.fechaCreacion = data.fechaCreacion;
                 documentoReferencia.fechaModificacion = data.fechaCreacion;
                 await DocReferencia.guardar(documentoReferencia);
             }
             await listarDocumento;
            res.json(data);
        }
        catch(err){
            res.status(404).send('error');
            console.log('error al ingresar ' + err);
        }
    })
};

module.exports = controladorBaja;
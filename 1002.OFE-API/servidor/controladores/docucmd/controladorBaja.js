var RetencionBajaDTO = require('../../dtos/comprobante/retencionBajaDTO');
var uuid = require('../../utilitarios/uuid');
var DocReferencia = require('../../dtos/msdocucmd/documentoReferenciaDTO');
var DocParametro = require('../../dtos/msdocucmd/documentoParametroDTO');
var constantes = require('../../utilitarios/constantes');
var ComprobantePagoQuery = require('../../dtos/comprobante/comprobantePagoQueryDTO');
var InstanciaDocParametro = require('../../dtos/msdocucmd/documentoParametroDTO');
/**
 *  Controlador de RETENCIONES BAJA
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos
 */

var controladorBaja = function (ruta,rutaEsp){
    router.post(ruta.concat('/comunicacionesDeBaja'), async function(req,res){
        var data = req.body;
        data.id = uuid();
      //  ComprobantePagoQuery.buscarComprobanteById(data.id).then(function(data){
      //      res.json
//});
        
        try{
            //FOR COMPROBANTE
            data.rucComprador = ' ';
            data.numeroComprobante= ' ';
            data.fechaEmision = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
            data.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.fechaRegistro = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");
            data.flagOrigenComprobante = 'p';
            data.estadoComprobante = '2';
            data.flagOrigenCreacion = '1';
            data.estado = 'Bloqueado';
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
            for (let instanciaDetalleBaja of data.detalleBaja){
                var Comprobante = await ComprobantePagoQuery.buscarComprobanteById(req.body.detalleBaja[0]);
                instanciaDetalleBaja.idDocumentoOrigen = data.id;
                instanciaDetalleBaja.usuarioCreacion = req.headers.usuario;
                instanciaDetalleBaja.usuarioModifica = req.headers.usuario;
                instanciaDetalleBaja.totalImporteDestino = 0;
                await DocReferencia.guardar(instanciaDetalleBaja);
                InstanciaDocParametro.iParamEnt = constantes.numeroDeComprobante;
                InstanciaDocParametro.idComprobantePago = data.id;
                var obj = new Object();
                obj.tipo = 3;
                obj.valor = "NumeroComprobante";
                obj.auxiliarEntero = 0;
                obj.auxiliarImporte = 0.0;
                obj.auxiliarFecha = null;
                InstanciaDocParametro.json = JSON.stringify(obj);
                InstanciaDocParametro.usuarioCreacion = req.headers.usuario;
                InstanciaDocParametro.usuarioModificacion = req.headers.usuario;
                InstanciaDocParametro.fechaCreacion = data.fechaCreacion;
                InstanciaDocParametro.fechaModificacion = data.fechaCreacion;
                InstanciaDocParametro.estado = 1;
                await DocParametro.guardar(InstanciaDocParametro);


            }        
          //   await listarDocumento;
            res.json(data);
        }
        catch(err){
            res.status(404).send('error');
            console.log('error al ingresar ' + err);
        }
    })
};

module.exports = controladorBaja;
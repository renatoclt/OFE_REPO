var RetencionBajaDTO = require('../../dtos/comprobante/retencionBajaDTO');
var uuid = require('../../utilitarios/uuid');
var DocReferencia = require('../../dtos/msdocucmd/documentoReferenciaBajaDTO');
var DocParametro = require('../../dtos/msdocucmd/documentoParametroDTO');
var constantes = require('../../utilitarios/constantes');
var ComprobantePagoQuery = require('../../dtos/comprobante/comprobantePagoQueryDTO');
var InstanciaDocParametro = require('../../dtos/msdocucmd/documentoParametroDTO');
var ComprobantePago = require('../../dtos/comprobante/comprobantePagoUpdateDTO');
var ComprobantePagoQuery = require('../../dtos/comprobante/comprobantePagoQueryUpdateDTO');
/**
 *  Controlador de RETENCIONES BAJA
 * @param {*} ruta ruta del servicio
 * @param {*} rutaEsp ruta para el hateos
 */

var controladorBaja = function (ruta,rutaEsp){
    router.post(ruta.concat('/comunicacionesDeBaja'), async function(req,res){
        var data = req.body;
        data.id = uuid();      
        var loop = 0;
        try{
            data.fechaEmision = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
            data.version = 0;
            await RetencionBajaDTO.BajaRetencion(data);
            for (let instanciaDetalleBaja of data.detalleBaja){
                instanciaDetalleBaja.documentoParametro=new Array();
                instanciaDetalleBaja.idDocumentoOrigen = data.id;
                instanciaDetalleBaja.usuarioCreacion = data.usuarioCreacion;
                instanciaDetalleBaja.usuarioModifica = data.usuarioCreacion;
                instanciaDetalleBaja.totalImporteDestino = 0;
                instanciaDetalleBaja.estado = 'Bloqueado';
                instanciaDetalleBaja.estadoComprobante = 2;
                instanciaDetalleBaja.fechaCreacion = data.fechaEmision;
                instanciaDetalleBaja.fechaModificacion= data.fechaEmision;
                instanciaDetalleBaja.fechaEmisionDestino  = data.fechaEmision;
                
                await DocReferencia.guardar(instanciaDetalleBaja);
                // Edicion JSON
                delete instanciaDetalleBaja.usuarioCreacion;
                delete instanciaDetalleBaja.usuarioModifica;
                delete instanciaDetalleBaja.idDocumentoOrigen;
                delete instanciaDetalleBaja.totalImporteDestino;
             

                var Comprobante = await ComprobantePagoQuery.buscarComprobanteById(req.body.detalleBaja[loop].idComprobante);
                detalleDocumento(data);
                loop++;
            }        
            delete data.id;
            res.json(data);
        }
        catch(err){
            res.status(404).send('error');
            console.log('error al ingresar ' + err);
        }
    })
};
async function detalleDocumento(data){
               // Hardcode DOCUMENTOSPARAMETROS
               InstanciaDocParametro.iParamEnt = constantes.numeroDeComprobante;
               InstanciaDocParametro.idComprobantePago = data.id;
               var obj = new Object();
               obj.tipo = 3;
               obj.valor = Comprobante.vcSerie.concat(Comprobante.vcCorrelativo);
               obj.auxiliarEntero = 0;
               obj.auxiliarImporte = 0.0;
               obj.auxiliarFecha = null;
               InstanciaDocParametro.json = JSON.stringify(obj);
               InstanciaDocParametro.usuarioCreacion = data.usuarioCreacion;
               InstanciaDocParametro.usuarioModificacion = data.usuarioCreacion;
               InstanciaDocParametro.fechaCreacion = data.fechaEmision;
               InstanciaDocParametro.fechaModificacion = data.fechaEmision;
               InstanciaDocParametro.estado = 1;
               await DocParametro.guardar(InstanciaDocParametro).then(function(dataDoc){
                       dataDoc.dataValues.fechaCreacion = new Date(dataDoc.dataValues.fechaCreacion).getTime();
                       dataDoc.dataValues.fechaModificacion = new Date(dataDoc.dataValues.fechaModificacion).getTime();
                       instanciaDetalleBaja.documentoParametro.push(dataDoc.dataValues);
                   });
               obj.valor =new Date(data.fechaEmision);
               InstanciaDocParametro.iParamEnt = constantes.fechaBaja;
               InstanciaDocParametro.json = JSON.stringify(obj);
               await DocParametro.guardar(InstanciaDocParametro).then(function(dataDoc){
                       dataDoc.dataValues.fechaCreacion = new Date(dataDoc.dataValues.fechaCreacion).getTime();
                       dataDoc.dataValues.fechaModificacion = new Date(dataDoc.dataValues.fechaModificacion).getTime();
                       instanciaDetalleBaja.documentoParametro.push(dataDoc.dataValues);
                    });
               obj.valor = instanciaDetalleBaja.motivo;
               InstanciaDocParametro.iParamEnt = constantes.motivoBaja;
               InstanciaDocParametro.json = JSON.stringify(obj);
               await DocParametro.guardar(InstanciaDocParametro).then(function(dataDoc){
                       dataDoc.dataValues.fechaCreacion = new Date(dataDoc.dataValues.fechaCreacion).getTime();
                       dataDoc.dataValues.fechaModificacion = new Date(dataDoc.dataValues.fechaModificacion).getTime();
                       instanciaDetalleBaja.documentoParametro.push(dataDoc.dataValues);
                    });
               await ComprobantePago.actualizar(instanciaDetalleBaja.idComprobante);
               await ComprobantePagoQuery.actualizarQuery(instanciaDetalleBaja.idComprobante);
};
module.exports = controladorBaja;
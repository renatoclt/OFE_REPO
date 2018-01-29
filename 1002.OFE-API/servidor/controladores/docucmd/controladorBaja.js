var RetencionBajaDTO = require('../../dtos/comprobante/retencionBajaDTO');
var uuid = require('../../utilitarios/uuid');
var DocReferencia = require('../../dtos/msdocucmd/documentoReferenciaBajaDTO');
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
        var fechaActual = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss.l");

        try{
            data.fechaEmision = dateFormat(data.fechaEmision, "yyyy-mm-dd HH:MM:ss");
            data.version = 0;
            await RetencionBajaDTO.BajaRetencion(data);
            var loop = 0;
            for (let instanciaDetalleBaja of data.detalleBaja){
                instanciaDetalleBaja.documentoParametro=new Array();
                instanciaDetalleBaja.idDocumentoOrigen = data.id;
                instanciaDetalleBaja.usuarioCreacion = data.usuarioCreacion;
                instanciaDetalleBaja.usuarioModifica = data.usuarioCreacion;
                instanciaDetalleBaja.totalImporteDestino = 0;
                instanciaDetalleBaja.estado = 'Bloqueado';
                instanciaDetalleBaja.estadoComprobante = 2;
                await DocReferencia.guardar(instanciaDetalleBaja);

                delete instanciaDetalleBaja.usuarioCreacion;
                delete instanciaDetalleBaja.usuarioModifica;
                delete instanciaDetalleBaja.idDocumentoOrigen;
                delete instanciaDetalleBaja.totalImporteDestino;

                var Comprobante = await ComprobantePagoQuery.buscarComprobanteById(req.body.detalleBaja[0].idComprobante);
               
               
               
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
                InstanciaDocParametro.fechaCreacion = fechaActual;
                InstanciaDocParametro.fechaModificacion = fechaActual;
                InstanciaDocParametro.estado = 1;
                await DocParametro.guardar(InstanciaDocParametro).then(function(dataDoc){
                    dataDoc.dataValues.fechaCreacion = new Date(dataDoc.dataValues.fechaCreacion).getTime();
                    dataDoc.dataValues.fechaModificacion = new Date(dataDoc.dataValues.fechaModificacion).getTime();
                    instanciaDetalleBaja.documentoParametro.push(dataDoc.dataValues);
                });
                obj.valor = dateFormat(new Date(), "yyyy-mm-dd");
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

            }        
          //   await listarDocumento;
            delete data.id;
            res.json(data);
        }
        catch(err){
            res.status(404).send('error');
            console.log('error al ingresar ' + err);
        }
    })
};

module.exports = controladorBaja;
/**
 * @author jose felix ccopacondori
 */

var ComprobantePagoQuery= require('../../modelos/comprobantes/comprobantePagoQuery');
var DocParametroQuery=require('../../modelos/comprobantes/feQuerydocParametro');
var EntidadQuery =require('../../modelos/comprobantes/feQuerydocEntidad');
var ComprobanteEventoQuery =require('../../modelos/comprobantes/feQueryComprobanteEvento');
contantes = require("../../utilitarios/constantes");
sequelize = require("sequelize");


//const Op = conexion.Op;

ComprobantePagoQuery.buscarComprobante = function (id) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            ComprobantePagoQuery.findById(id,{
                    include:[
                        {
                            model: DocParametroQuery,
                            as: 'parametros'
                        },
                        {
                            model: EntidadQuery,
                            as: 'entidadproveedora'
                        },
                        {
                            model: EntidadQuery,
                            as: 'entidadcompradora'
                        },
                        {
                            model: ComprobanteEventoQuery,
                            as: 'eventos'
                        }
                    ]
            }
            ).then(function (comprobante) {
                resolve(comprobante.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
};

ComprobantePagoQuery.buscarComprobanteConFiltros = function (pagina,limite) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            ComprobantePagoQuery.findAndCountAll(
                {
                    //where: { idTipoComprobante: contantes.idTipocomprobanteRetencion},
                    include:[
                        {
                            model: DocParametroQuery,
                            as: 'parametros'
                        },
                        {
                            model: EntidadQuery,
                            as: 'entidadproveedora'
                        },
                        {
                            model: EntidadQuery,
                            as: 'entidadcompradora'
                        },
                        {
                            model: ComprobanteEventoQuery,
                            as: 'eventos'
                        }
                    ],
                    offset:(pagina*limite),
                    limit: limite
                }
            ).then(function (comprobantes) {

                var cantidadReg = comprobantes.count;
                comprobantes = comprobantes.rows.map(function (data) {
                    return data.dataValues;
                });
                resolve({ 'comprobantes': comprobantes, 'cantidadReg': cantidadReg });
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
};


module.exports = ComprobantePagoQuery;

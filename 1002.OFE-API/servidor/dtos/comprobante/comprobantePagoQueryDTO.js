/**
 * @author jose felix ccopacondori
 */

var ComprobantePagoQuery= require('../../modelos/comprobantes/comprobantePagoQuery');
var DocParametroQuery=require('../../modelos/comprobantes/feQuerydocParametro');
var EntidadQuery =require('../../modelos/comprobantes/feQuerydocEntidad');
var ComprobanteEventoQuery =require('../../modelos/comprobantes/feQueryComprobanteEvento');
var dateFormat = require('dateformat');
contantes = require("../../utilitarios/constantes");
sequelize = require("sequelize");


const Op = conexion.Op;

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

ComprobantePagoQuery.buscarComprobanteConFiltros = function (
            pagina, 
            limite,
            idEntidadEmisora,               // inIdentidademisor
            tipoComprobanteTabla,           // vcIdtablatipocomprobante
            tipoComprobanteRegistro,        // vcIdregistrotipocomprobante
            fechaEmisionDel,                // tsFechaemision
            fechaEmisionAl,                 // tsFechaemision
            tipoDocumento,                  // tabla entidad
            nroDocumento,                   // tabla entidad
            ticket,                         // vcTicketRetencion
            estado,                         // chEstadocomprobantepago
            nroSerie,                       // vcSerie
            correlativoInicial,             // vcCorrelativo
            correlativoFinal,               // vcCorrelativo
            ordenar,
            fechaBajaDel,
            fechaBajaAl,
            ticketBaja
){
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            ComprobantePagoQuery.findAndCountAll(
                {
                    where:filtrosDinamicos(idEntidadEmisora,tipoComprobanteTabla,tipoComprobanteRegistro,fechaEmisionDel,fechaEmisionAl,tipoDocumento,nroDocumento,ticket,estado,nroSerie,correlativoInicial,correlativoFinal,ordenar,fechaBajaDel,fechaBajaAl,ticketBaja), 
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
                      /*      where: {
                                vcTipoDocumento: tipoDocumento
                                ,vcDocumento:nroDocumento
                              },
                            required: true*/
                        },
                        {
                            model: ComprobanteEventoQuery,
                            as: 'eventos'
                        }
                    ],
                    order:[ [ordenar, 'DESC']],
                    group: 'in_idcomprobantepago',
                    offset:(pagina*limite),
                    limit: limite
                }
            ).then(function (comprobantes) {

                var cantidadReg = comprobantes.count.length;
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

function filtrosDinamicos(
            idEntidadEmisora,               // inIdentidademisor
            tipoComprobanteTabla,           // vcIdtablatipocomprobante
            tipoComprobanteRegistro,        // vcIdregistrotipocomprobante
            fechaEmisionDel,                // tsFechaemision
            fechaEmisionAl,                 // tsFechaemision
            tipoDocumento,                  // tabla entidad
            nroDocumento,                   // tabla entidad
            ticket,                         // vcTicketRetencion
            estado,                         // chEstadocomprobantepago
            nroSerie,                       // vcSerie
            correlativoInicial,             // vcCorrelativo
            correlativoFinal,               // vcCorrelativo
            ordenar,
            fechaBajaDel,
            fechaBajaAl,
            ticketBaja
){
    var whereClause={}

    if (idEntidadEmisora!='') {
        whereClause['inIdentidademisor'] =idEntidadEmisora; 
    }
    if (tipoComprobanteTabla!='') {
        whereClause['vcIdtablatipocomprobante'] =tipoComprobanteTabla; 
    }
    if (tipoComprobanteRegistro!='') {
        whereClause['vcIdregistrotipocomprobante'] =tipoComprobanteRegistro; 
    }
    /*
    if (tipoDocumento!='') {
        whereClause['tipoDocumento'] =tipoDocumento; 
    }
    if (nroDocumento!='') {
        whereClause['nroDocumento'] =nroDocumento; 
    }
    */
    if (ticket!='') {
        whereClause['vcTicketRetencion'] =ticket; 
    }
    if (estado!='') {
        whereClause['chEstadocomprobantepago'] =estado; 
    }
    if (nroSerie!='') {
        whereClause['vcSerie'] =nroSerie; 
    }
    if (ticketBaja!='') {
        whereClause['vcParamTicket'] =ticketBaja; 
    }    
    if (correlativoInicial!='') {
        whereClause['vcCorrelativo'] ={
            [Op.gte]:correlativoInicial
        };
    }
    if (correlativoFinal!='') {
        whereClause['vcCorrelativo'] ={
            [Op.lte]:correlativoFinal
        }; 
    }
    var splitemisionInicio=fechaEmisionDel.split('/');
    var splitemisionFin=fechaEmisionAl.split('/');
    var fechaemision_inicio    =    new Date(parseInt(splitemisionInicio[2]),parseInt(splitemisionInicio[1])-1,parseInt(splitemisionInicio[0]));
    var fechaemision_fin       =    new Date(parseInt(splitemisionFin[2]),parseInt(splitemisionFin[1])-1,parseInt(splitemisionFin[0]),23,59,59,999);
    var formatInicio=dateFormat(fechaemision_inicio, "yyyy-mm-dd HH:MM:ss");
    var formatFin=dateFormat(fechaemision_fin, "yyyy-mm-dd HH:MM:ss");

    whereClause['tsFechaemision'] ={
        [Op.between]: 
                    [ formatInicio , formatFin]
    };

    if(fechaBajaDel!=''&&fechaBajaAl!=''){
        var spliteBajaInicio=fechaBajaDel.split('/');
        var spliteBajaFin=fechaBajaAl.split('/');
        var fechaBaja_inicio    =    new Date(parseInt(spliteBajaInicio[2]),parseInt(spliteBajaInicio[1])-1,parseInt(spliteBajaInicio[0]));
        var fechaBaja_fin       =    new Date(parseInt(spliteBajaFin[2]),parseInt(spliteBajaFin[1])-1,parseInt(spliteBajaFin[0]),23,59,59,999);
        var formatBajaInicio=dateFormat(fechaBaja_inicio, "yyyy-mm-dd HH:MM:ss");
        var formatBajaFin=dateFormat(fechaBaja_fin, "yyyy-mm-dd HH:MM:ss");
        whereClause['tsParamFechabaja'] ={
            [Op.between]: 
                        [ formatBajaInicio , formatBajaFin]
        };
    }
    return whereClause;
} 

module.exports = ComprobantePagoQuery;

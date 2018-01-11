/**
 * @author felix 
 */

var DocParametroQuery=require('../../modelos/comprobantes/feQuerydocParametro');
var ComprobantePagoQuery= require('../../modelos/comprobantes/comprobantePagoQuery');
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

module.exports = ComprobantePagoQuery;

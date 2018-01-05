Comprobante = require('../../modelos/comprobantes/comprobantePago');
contantes = require("../../utilitarios/constantes");
Comprobante.buscarComprobante = function (id) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Comprobante.findById(id,{
                attributes: ['id','idUsuarioCreacion','fechaCreacion','numeroComprobante','generado','estado','estadoSincronizado']
            }).then(function (comprobante) {
                resolve(comprobante.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
}

Comprobante.buscarComprobantes = function (pagina, regxpag) {
    if (pagina == null) {
        throw Error("Falta de argementos requeridos 'pagina'");
    }
    if (regxpag == null) {
        throw Error("Falta de argementos requeridos 'regxpag'");
    }
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Comprobante.findAndCountAll({  
                attributes: ['id','idUsuarioCreacion','fechaCreacion','numeroComprobante','generado','estado','estadoSincronizado'],
                where: { idTipoComprobante: contantes.idTipocomprobanteRetencion}, 
                offset: (pagina * regxpag), 
                limit: regxpag 
                }).then(function (comprobantes) {

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
}

module.exports = Comprobante;
Comprobante = require('../../modelos/comprobantes/comprobantePago');
contantes = require("../../utilitarios/constantes");
sequelize = require("sequelize");
var Percepcion=function(){};
Percepcion.buscarComprobante = function (id) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Comprobante.findById(id,{
                attributes: ['id','idUsuarioCreacion','fecSincronizado','numeroComprobante','generado','estado','estadoSincronizado','estadoComprobante'],
            }).then(function (comprobante) {
                resolve(comprobante.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
};

Percepcion.buscarComprobantes = function (pagina, regxpag) {
    if (pagina == null) {
        throw Error("Falta de argementos requeridos 'pagina'");
    }
    if (regxpag == null) {
        throw Error("Falta de argementos requeridos 'regxpag'");
    }
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Comprobante.findAndCountAll({  
                attributes: ['id','idUsuarioCreacion','fecSincronizado','numeroComprobante','generado','estado','estadoSincronizado','estadoComprobante'],
                where: { idTipoComprobante: contantes.idTipocomprobantePercepcion}, 
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
};

Percepcion.buscarRetencionEspecifico=function(pagina, regxpag, numeroComprobante_,generado_,estado_,fechaInicio,fechaFin,estadoSincronizado_){
// listar percepciones con filtros
    
    if (pagina==null){
        throw Error("Falta de argumentos requeridos 'pagina'");
    }
    if (regxpag==null){
        throw Error("Falta de argumentos requeridos 'regxpag'");
    }
    if (numeroComprobante_==null){
        throw Error("Falta de argumentos requeridos 'Numero del comprobante'");
    }
    if (generado_==null){
        throw Error("Falta de argumentos requeridos 'Generado'");
    }
    if (estado_==null){
        throw Error("Falta de argumentos requeridos 'estado del documento'");
    }
    if (fechaInicio==null){
        throw Error("Falta de argumentos requeridos 'Fecha de Inicio'");
    }
    if (fechaFin==null){
        throw Error("Falta de argumentos requeridos 'Fecha de Fin'");
    }
    if (estadoSincronizado_==null){
        throw Error("Falta de argumentos requeridos 'estado sincronización'");
    }

    const Op = sequelize.Op;
    var promise = new Promise(function(resolve, reject){
        conexion.sync()
        .then(function () {
            Comprobante.findAndCountAll(
                { 
//pagina, regxpag, numeroComprobante_,generado_,estado_,fechaInicio,fechaFin,estadoSincronizado_, ordenar){
                    
                    attributes: ['id','idUsuarioCreacion','fecSincronizado','numeroComprobante','generado','estado','estadoSincronizado'],
                    where: { 
                            numeroComprobante:numeroComprobante_ ,
                            generado:generado_,                         // 0: offline , 1: online
                            estado:estado_,                             // Bloqueado, Inactivo,..
                            estadoSincronizado:estadoSincronizado_,     // 0: no sincronizado, 1: sincronizado
                            idTipoComprobante: contantes.idTipocomprobantePercepcion,
                            fechaCreacion: { 
                                [Op.between]: [fechaInicio,fechaFin+'23:59:59.999999999'] 
                               // [Op.between]: ['2018-01-02','2018-01-04'+'23:59:59.999999999'] 
                            }    

                            },                       
                    
                    offset: (pagina*regxpag), 
                    limit: regxpag
                })
                .then(function (comprobantes) {
                    var cantidadReg = comprobantes.count;

                    comprobantes = comprobantes.rows.map(function(comprobante){ 
                        return comprobante.dataValues;
                    });
                
                    resolve({'comprobantes': comprobantes, 'cantidadReg': cantidadReg});
                });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    
    return promise;



};
module.exports = Percepcion;
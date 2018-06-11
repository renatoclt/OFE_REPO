Comprobante = require('../../modelos/comprobantes/comprobantePago');
contantes = require("../../utilitarios/constantes");
sequelize = require("sequelize");
var Retencion=function(){};
Retencion.buscarComprobante = function (id) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Comprobante.findById(id,{
                attributes: ['id','idUsuarioCreacion','fecSincronizado','numeroComprobante','generado','estado','estadoSincronizado']
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
Retencion.buscarComprobanteNumeroComprobante = function (id) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Comprobante.findAll({
                attributes: ['id','idUsuarioCreacion','fecSincronizado','numeroComprobante','generado','estado','estadoSincronizado'],
                where: {
                    numeroComprobante : id
                }
            }).then(function (comprobante) {
                if (comprobante.length > 0)
                    resolve(comprobante[0].dataValues);
                else    
                    resolve({});
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
};

Retencion.buscarComprobantes = function (pagina, regxpag) {
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
};

Retencion.buscarComprobanteDinamico = function(pagina, regxpag, numeroComprobante_,generado_,estado_,fechaInicio_,fechaFin_,estadoSincronizado_){
    let whereDinamico = {};
    const Op = sequelize.Op;
    console.log(estadoSincronizado_);
    if(numeroComprobante_ !== null && numeroComprobante_ !== '')
        whereDinamico.numeroComprobante = numeroComprobante_;
    else{
        if(generado_ !== null && generado_ !== ''){
            whereDinamico.generado = generado_;
        }
        if(estado_ !== null && estado_ !== ''){
            whereDinamico.estado = estado_;
        }
        if(estadoSincronizado_ !== null && estadoSincronizado_ !== ''){
            whereDinamico.estadoSincronizado = estadoSincronizado_;
        }
        if(fechaInicio_ !== null && fechaInicio_ !== '' && fechaFin_ !== null && fechaFin_ !== ''){
            whereDinamico.fechaCreacion = { 
                [Op.between]: [fechaInicio_,fechaFin_+'23:59:59.999999999'] 
                //[Op.between]: ['2018-01-02','2018-01-04'+'23:59:59.999999999'] 
            }  
        }
    }
    console.log(whereDinamico);
    return Comprobante.findAndCountAll({
        attributes: ['id','idUsuarioCreacion','fecSincronizado','numeroComprobante','generado','estado','estadoSincronizado','estadoComprobante'],
        where: whereDinamico 
    } ).then(function (comprobantes) {
        var cantidadReg = comprobantes.count;
        comprobantes = comprobantes.rows.map(function(comprobante){ 
            return comprobante.dataValues;
        });
        return({'comprobantes': comprobantes, 'cantidadReg': cantidadReg});
    });
}

Retencion.buscarRetencionEspecifico=function(pagina, regxpag, numeroComprobante_,generado_,estado_,fechaInicio,fechaFin,estadoSincronizado_){
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
                    attributes: ['id','idUsuarioCreacion','fechaCreacion','numeroComprobante','generado','estado','estadoSincronizado','estadoComprobante'],
                    where: { 
                            numeroComprobante:numeroComprobante_ ,
                            generado:generado_,                         // 0: offline , 1: online
                            estado:estado_,                             // Bloqueado, Inactivo,..
                            estadoSincronizado:estadoSincronizado_,     // 0: no sincronizado, 1: sincronizado
                            idTipoComprobante: contantes.idTipocomprobanteRetencion,
                            fechaCreacion: { 
                                [Op.between]: [fechaInicio,fechaFin+'23:59:59.999999999'] 
                               // [Op.between]: ['2018-01-02','2018-01-04'+'23:59:59.999999999'] 
                            }    

                        },                       
                    
                    offset: (pagina*regxpag), 
                    limit: regxpag
                })
                .then(function (comprobantes) {
                    console.log('***********************************************************************************************');
                    console.log(comprobantes);
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

module.exports = Retencion;
EntParametro = require('../../modelos/comprobantes/entParametros');

EntParametro.registrarParametro = function(entParametro) {
    console.log(entParametro);
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            EntParametro.create({
                id : entParametro.id,
                iParamEnt : entParametro.iParamEnt,
                json : entParametro.json,
                usuarioCreacion : entParametro.usuarioCreacion,
                usuarioModificacion : entParametro.usuarioModificacion,
                fechaCreacion : entParametro.fechaCreacion,
                fechaModificacion : entParametro.fechaModificacion,
                estado : entParametro.estado,
                fechaSincronizado : entParametro.fechaSincronizado,
                estadoSincronizado : entParametro.estadoSincronizado                    
            }).then(function () {
                console.log("commit entParametro");
                resolve();
            }).catch(function (err) {
                console.log(err);
                reject(err);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
}

module.exports = EntParametro;
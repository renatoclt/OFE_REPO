DominioEnt = require("../../modelos/organizaciones/dominioEnt");

DominioEnt.buscarPorIDyTipo = function (idDocumento, tipoDocumento) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            DominioEnt.findOne({
                where: {
                    id: idDocumento,
                    iParamEnt: tipoDocumento
                }
            }).then(function (dominioEnt) {
                resolve(dominioEnt.dataValues);
                return dominioEnt.dataValues;
            }, function (err) {
                console.log(err);
                resolve({});
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
}

module.exports = DominioEnt;
var EntidadParametro = require('../../modelos/msoffline/entidadParametro');

EntidadParametro.findFirstByIdEntidadAndIdParametro = function (_idEntidad, _idParametro) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync()
            .then(function () {
                EntidadParametro.findAll({
                    where: {
                        id: _idParametro,
                        entidad: _idEntidad
                    }
                }).then(function (entidadParametro) {
                    resolve(entidadParametro.dataValues);
                });
            });
    });
    return promise;
};
module.exports = EntidadParametro;
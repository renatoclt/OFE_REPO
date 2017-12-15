TipoPrecVen = require('../../modelos/configuracion/tipoPrecVen');

TipoPrecVen.todos = function () {

    var promise = new Promise(function (resolve, reject) {
        conexion.sync()
            .then(function () {
                TipoPrecVen.findAll({ where: { estado: 1 } }).then(function (tipoPrecVenRedises) {
                    tipoPrecVenRedises = tipoPrecVenRedises.map(function (tipoPrecVen) {
                        return tipoPrecVen.dataValues;
                    });
                    resolve(tipoPrecVenRedises);
                });
            }, function (err) {
                console.log(err);
                resolve({});
            });
    });

    return promise;
}

TipoPrecVen.buscarId = function (id) {

    var promise = new Promise(function (resolve, reject) {
        conexion.sync()
            .then(function () {
                TipoPrecVen.findById(id).then(function (tipoPrecVen) {
                    resolve(tipoPrecVen.dataValues);
                });
            }, function (err) {
                console.log(err);
                resolve({});
            });
    });

    return promise;
}

module.exports = TipoPrecVen;
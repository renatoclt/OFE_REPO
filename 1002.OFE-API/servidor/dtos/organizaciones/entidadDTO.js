Entidad = require('../../modelos/organizaciones/entidad');

Entidad.registrarEntidad = function (entidad) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Entidad.create({
                documento: entidad.documento,
                denominacion: entidad.denominacion,
                nombreComercial: entidad.nombreComercial,
                nombre: entidad.nombre,
                apellidoPaterno: entidad.apellidoPaterno,
                apellidoMaterno: entidad.apellidoMaterno,
                direccion: entidad.direccion,
                correo: entidad.correo,
                usuarioCreacion: entidad.usuarioCreacion,
                usuarioModifica: entidad.usuarioModifica,
                fechaCreacion: entidad.fechaCreacion,
                fechaModificacion: entidad.fechaModificacion,
                estado: entidad.estado,
                fechaSincronizacion: entidad.fechaSincronizacion,
                estadoSincronizado: entidad.estadoSincronizado
            }).then(() => Entidad.findOrCreate({
                where: { documento: entidad.documento }
            })).spread((entidad, created) => {
                entidad.get({ plain: true })
                console.log("commit entidad");
                resolve(entidad.dataValues);
            }).catch(function (err) {
                reject();
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
}

Entidad.buscarEntidad = function (id) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Entidad.findById(id).then(function (entidad) {
                resolve(entidad.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
}

Entidad.buscarEntidades = function (pagina, regxpag) {
    if (pagina == null) {
        throw Error("Falta de argementos requeridos 'pagina'");
    }
    if (regxpag == null) {
        throw Error("Falta de argementos requeridos 'regxpag'");
    }
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Entidad.findAndCountAll({ where: { estado: 1 }, offset: (pagina * regxpag), limit: regxpag }).then(function (entidades) {
                var cantidadReg = entidades.count;
                entidades = entidades.rows.map(function (entidad) {
                    return entidad.dataValues;
                });
                resolve({ 'entidades': entidades, 'cantidadReg': cantidadReg });
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
}

module.exports = Entidad;
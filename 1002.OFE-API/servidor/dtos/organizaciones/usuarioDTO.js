Usuario = require('../../modelos/organizaciones/usuario');

Usuario.buscarUsuario = function (id) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Usuario.findById(id).then(function (usuario) {
                resolve(usuario.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
}

Usuario.buscarUsuarios = function (pagina, regxpag) {
    if (pagina == null) {
        throw Error("Falta de argementos requeridos 'pagina'");
    }
    if (regxpag == null) {
        throw Error("Falta de argementos requeridos 'regxpag'");
    }
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            Usuario.findAndCountAll({ where: { estado: 1 }, offset: (pagina * regxpag), limit: regxpag }).then(function (usuarios) {
                var cantidadReg = usuarios.count;
                usuarios = usuarios.rows.map(function (data) {
                    return data.dataValues;
                });
                resolve({ 'usuarios': usuarios, 'cantidadReg': cantidadReg });
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    return promise;
}

module.exports = Usuario;
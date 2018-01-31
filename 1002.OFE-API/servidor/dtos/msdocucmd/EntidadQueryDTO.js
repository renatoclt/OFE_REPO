EntidadQueryCommand = require('../../modelos/msdocucmd/EntidadQueryCommand');
contantes = require("../../utilitarios/constantes");
sequelize = require("sequelize");
OP = sequelize.Op;
var EntidadQueryDTO=function(){};
EntidadQueryDTO.buscarEntidades = function (idTipoDocumento,denominacion,pagina, regxpag) {
    var promise = new Promise(function (resolve, reject) {
        conexion.sync().then(function () {
            EntidadQueryCommand.findAndCountAll(
                {
                    where:{
                            idTipoDocumento:idTipoDocumento,
                            denominacion: {[OP.like]: ('%'+denominacion+'%')},
                            estado:1
                          }
                }
                ).then(function (entidades) {

                        var cantidadTotalEntidades= entidades.count;
                        entidades = entidades.rows.map(function (data) {
                            return data.dataValues;
                        });
                        resolve({ 'entidades': entidades, 'cantidadReg': cantidadTotalEntidades});
                }, function (err) {
                    console.log(err);
                    resolve({});
                });

        });
    });
    return promise;
};

module.exports = EntidadQueryDTO;
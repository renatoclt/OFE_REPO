TipoAfecIgv = require('../../modelos/configuracion/tipoAfecIgv');
OP = sequelize.Op;

TipoAfecIgv.todos = function(){
   
    var promise = new Promise(function(resolve,reject){
        conexion.sync()
        .then(function () {
            TipoAfecIgv.findAll({ where: { estado: 1}}).then(function (tipoAfectacionIgvRedises) {
                tipoAfectacionIgvRedises = tipoAfectacionIgvRedises.map(function(tipoAfectacionIgv){ 
                    return tipoAfectacionIgv.dataValues;
                });
                resolve(tipoAfectacionIgvRedises);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    
    return promise;
}

module.exports = TipoAfecIgv;
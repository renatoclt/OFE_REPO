Producto = require('../../modelos/producto/producto');

Producto.buscarProducto = function (id) {
    var promise = new Promise(function(resolve,reject){
        conexion.sync()
        .then(function () {
            Producto.findById(id).then(function (user) {
                resolve(user.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    
    return promise;
};

Producto.todos = function(){
    var promise = new Promise(function(resolve,reject){
        conexion.sync()
        .then(function () {
            Producto.findAll({ where: { estado: 1} }).then(function (productos) {
                resolve(productos);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    
    return promise;
}

module.exports = Producto;
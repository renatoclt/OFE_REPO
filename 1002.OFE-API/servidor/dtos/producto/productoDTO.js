Producto = require('../../modelos/organizaciones/producto');

Producto.buscarProducto = function (id) {
    var promise = new Promise(function(resolve,reject){
        conexion.sync()
        .then(function () {
            Producto.findById(id).then(function (producto) {
                resolve(producto.dataValues);
            });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    
    return promise;
};

Producto.todos = function(pagina, regxpag){
    
    if(pagina==null){
        throw Error("Falta de argementos requeridos 'pagina'");
    }
    if(regxpag==null){
        throw Error("Falta de argementos requeridos 'regxpag'");
    }
   
    var promise = new Promise(function(resolve,reject){
        conexion.sync()
        .then(function () {
            Producto.findAll({ where: { estado: 1}, offset: (pagina*regxpag), limit: regxpag }).then(function (productos) {
                productos = productos.map(function(producto){ 
                    return producto.dataValues;
                });
                
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
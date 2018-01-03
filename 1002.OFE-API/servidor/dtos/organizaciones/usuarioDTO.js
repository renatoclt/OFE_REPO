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

Usuario.registrarUsuario =function(usuario){

    var promise= new Promise(function (resolve, reject) {
     
        conexion.sync().then(function () {
            
            Usuario.create({
                nombreusuario:          usuario.nombreusuario,
                password:               usuario.password,
                nombre:                 usuario.nombre,
                apellido:               usuario.apellido,
                docIdentidad:           usuario.docIdentidad,
                numDocIdentidad:        usuario.numDocIdentidad,
                correo:                 usuario.correo,
                identidad:              usuario.identidad,           
                usuarioCreacion:        usuario.usuarioCreacion,
                usuarioModificacion:    null,
                fechaCreacion:          new Date().toLocaleString(),
                fechaModificacion:      null,
                estado:                 1,
                fechaSincronizado:      null,
                estadoSincronizado:     0

            }).then(function(data){
                resolve(data.dataValues);
            }).catch(function(error){
                console.log(error);
                resolve(error.message);
            });
        
        }, function (err) {
            console.log(err);
            resolve({});
        });

    });
    
    return promise;
}


Usuario.buscarProductoEspecifico = function(pagina, regxpag, usuario, password, ordenar){

    if (pagina==null){
        throw Error("Falta de argumentos requeridos 'pagina'");
    }
    if (regxpag==null){
        throw Error("Falta de argumentos requeridos 'regxpag'");
    }
    if (usuario==null){
        throw Error("Falta de argumentos requeridos 'usuario'");
    }
    if (password==null){
        throw Error("Falta de argumentos requeridos 'password'");
    }
    if (ordenar==null){
        throw Error("Falta de argumentos requeridos 'ordenar'");
    }

    var promise = new Promise(function(resolve, reject){
        conexion.sync()
        .then(function () {
            Usuario.findAll(
                { 
                    where: { 
                        estado: 1,
                        [OP.and]:{
                            nombreusuario: usuario,
                            password: password
                        }
                    }
                    /*,
                    offset: (pagina*regxpag), 
                    limit: regxpag*/
                })
                .then(function (usuarios) {
                    var cantidadReg = usuarios.length;

                    usuarios = usuarios.map(function(usuario){ 
                        return usuario.dataValues;
                    });
                
                    resolve({'usuarios': usuarios, 'cantidadReg': cantidadReg});
                });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    
    return promise;
}

module.exports = Usuario;
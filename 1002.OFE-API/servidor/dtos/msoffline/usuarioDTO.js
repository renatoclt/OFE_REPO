Usuario = require('../../modelos/msoffline/usuario');

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
                id:                     usuario.id,
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

Usuario.buscarYGuardar = function(data, id){
    return Usuario.findOne({where: {id: id}}).then(function(obj){
        if(obj){
            return Usuario.update({
                id: data.id,
                nombreusuario: data.nombreusuario,
                password: data.password,
                nombre: data.nombre,
                apellido: data.apellido,
                docIdentidad: data.docIdentidad,
                numDocIdentidad: data.numDocIdentidad,
                correo: data.correo,
                identidad: data.identidad,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado,
                nombrecompleto: estado.nombrecompleto,
                url_image: data.url_image,
                org_id: data.org_id,
                tipo_empresa: data.tipo_empresa,
                token: data.token,
                perfil: data.perfil,
                organizaciones: data.organizaciones,
            },{where: {id: id}});
        }
        else{
            return Usuario.create({
                id: data.id,
                nombreusuario: data.nombreusuario,
                password: data.password,
                nombre: data.nombre,
                apellido: data.apellido,
                docIdentidad: data.docIdentidad,
                numDocIdentidad: data.numDocIdentidad,
                correo: data.correo,
                identidad: data.identidad,
                usuarioCreacion: data.usuarioCreacion,
                usuarioModificacion: data.usuarioModificacion,
                fechaCreacion: data.fechaCreacion,
                fechaModificacion: data.fechaModificacion,
                estado: data.estado,
                fechaSincronizado: data.fechaSincronizado,
                estadoSincronizado: data.estadoSincronizado,
                nombrecompleto: data.nombrecompleto,
                url_image: data.url_image,
                org_id: data.org_id,
                tipo_empresa: data.tipo_empresa,
                token: data.token,
                perfil: data.perfil,
                organizaciones: data.organizaciones,
            });
        }
    });
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
            Usuario.findOne(
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
                  /* var usuario_={};
                   usuarios= usuarios.dataValues;*/
                   let salida=null;
                   var cantidadReg = 1;   
                   if(usuarios!=null){
                    salida=usuarios.dataValues;
                   }               
                    resolve({'usuarios': salida, 'cantidadReg': cantidadReg});
                });
        }, function (err) {
            console.log(err);
            resolve({});
        });
    });
    
    return promise;
}

module.exports = Usuario;
    EntidadQueryCommand = require('../../modelos/msdocucmd/EntidadQueryCommand');
    EntidadQueryOffline = require('../../modelos/msoffline/EntidadQueryOffline');
    contantes = require("../../utilitarios/constantes");
    RecursoOrganizacion = require("../../modelos/msdocucmd/RecursoOrganizacion");
    sequelize = require("sequelize");
    OP = sequelize.Op;
    var EntidadQueryDTO = function () { };


    EntidadQueryDTO.buscarEntidades = function (idTipoDocumento, denominacion, pagina, regxpag) {
        var promise = new Promise(function (resolve, reject) {
            conexion.sync().then(function () {
                EntidadQueryCommand.findAndCountAll(
                    {
                        where: {
                            idTipoDocumento: idTipoDocumento,
                            denominacion: { [OP.like]: ('%' + denominacion + '%') },
                            estado: 1
                        }
                    }
                ).then(function (entidades) {
                    var cantidadTotalEntidades = entidades.count;
                    entidades = entidades.rows.map(function (data) {
                        var DTO = ConvertirOrganizacionesDTO(data.dataValues);
                        return DTO;
                    });
                    resolve({ 'entidades': entidades, 'cantidadReg': cantidadTotalEntidades });
                }, function (err) {
                    console.log(err);
                    resolve({});
                });
            });
        });
        return promise;
    };


    EntidadQueryDTO.buscarEntidadById = function (numDocumento) {
        var promise = new Promise(function (resolve, reject) {
            conexion.sync().then(function () {
                EntidadQueryOffline.findOne({
                    where: { documento: numDocumento }
                }).then(function (entidad) {
                    if(entidad!=null){
                        var DTO = ConvertirOrganizacionesDTO(entidad.dataValues);
                        resolve(DTO);
                    }else{
                        this.buscarEntidadByNumDocumentoOffline(numDocumento);//si no encuntra busca tabla entidada offline
                    }
                    
                }, function (err) {
                    console.log(err);
                    resolve({});
                });
            });
        });
        return promise;
    };

    EntidadQueryDTO.buscarEntidadByNumDocumentoOffline = function (numDocumento) {
        var promise = new Promise(function (resolve, reject) {
            conexion.sync().then(function () {
                EntidadQueryCommand.findOne({
                    where: { documento: numDocumento }
                }).then(function (entidad) {
                    if(entidad!=null){
                        var DTO = ConvertirOrganizacionesDTO(entidad.dataValues);
                        resolve(DTO);
                    }else{
                        resolve({});
                    }
                    
                }, function (err) {
                    console.log(err);
                    resolve({});
                });
            });
        });
        return promise;
    };

    function ConvertirOrganizacionesDTO(data) {
        var salida = new RecursoOrganizacion();
            salida.id = data.id, //identificador
            salida.documento = data.documento,
            salida.denominacion = data.denominacion,
            salida.nombreComercial = data.nombreComercial,
            salida.direccionFiscal = data.direccionFiscal,
            salida.correoElectronico = data.correoElectronico,
            salida.logo = data.logo,
            salida.certificadoDigitalClave = null,
            salida.certificadoDigitalArchivo = null,
            salida.solUsuario = null,
            salida.solClave = null,
            salida.pais = data.pais,
            salida.ubigeo = data.ubigeo,
            salida.tipoDocumento = data.tipoDocumento,
            salida.idTipoDocumento = data.idTipoDocumento,
            salida.idEbiz = data.idEbiz;
            salida.usuarioCreacion = data.usuarioCreacion,
            salida.usuarioModificacion = data.usuarioModificacion,
            salida.fechaCreacion = data.fechaCreacion, //Timestamp
            salida.fechaModificacion = data.fechaModificacion,//Timestamp
            salida.estado = data.estado      // int
    //      salida.estadoRegistro = 9,  // REGISTRO_EXISTE_BD //data.estadoRegistro,
    //      salida.tipoFuente = 3               // BASE_DATOS_QUERY
        return salida;
    }

    module.exports = EntidadQueryDTO;

var RecursoOrganizacion = function() {
    var organizacion = {
        identificador: '',
        documento:'',
        denominacion:'',
        nombreComercial:'',
        direccionFiscal:'',
        correoElectronico:'',
        logo:'',
        certificadoDigitalClave:'',
        certificadoDigitalArchivo:'',
        solUsuario:'',
        solClave:'',
        pais:'',
        ubigeo:'',
        tipoDocumento:'',
        idTipoDocumento:'',
        idEbiz:'',
        usuarioCreacion:'',
        usuarioModificacion:'',
        fechaCreacion:'', //Timestamp
        fechaModificacion:'',//Timestamp
        estado:'',      // int
        estadoRegistro:'',
        tipoFuente:''
    }
    return organizacion;
};

module.exports = RecursoOrganizacion;
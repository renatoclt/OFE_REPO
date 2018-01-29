var DocumentoParametroDTO = require('../../modelos/comprobantes/docParametro');

DocumentoParametroDTO.guardar = function guardarParametro(data){
    return DocumentoParametroDTO.create({
        iParamDoc: data.iParamEnt,
        idComprobantePago: data.idComprobantePago,
        json: data.json,
        usuarioCreacion: data.usuarioCreacion,
        usuarioModificacion: data.usuarioModificacion,
        fechaCreacion: data.fechaCreacion,
        fechaModificacion: data.fechaModificacion,
        estado: data.estado
    });
}

module.exports = DocumentoParametroDTO; 
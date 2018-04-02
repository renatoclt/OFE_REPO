/**
 * @author --- Modificado **-**-****
 * @author renato creado 22-01-2018 
 */
var QueryParametroDominioDoc = require('../../modelos/msoffline/queryParametroDominioDoc');
//const Op = conexion.Op;
 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */

QueryParametroDominioDoc.guardar = function guardarQueryParametroDominioDoc(data){
    return QueryParametroDominioDoc.create({
        id: data.id_dominio,
        parametroDocumento: data.idparametro ,
        descripcionDocumento: data.parametro_descripcion ,
        dominioDocumento: data.id_dominio ,
        idioma: data.id_idioma ,
        codigo: data.codigo_dominio ,
        descripcion: data.descripcion_dominio ,
        descripcionCorta: data.descripcion_corta_dominio ,
        estadoParametro: data.parametro_estado ,
        estadoDominio: data.dominio_estado ,
        fechaSincronizado: data.fechaSincronizado ,
        estadoSincronizado: data.estadoSincronizado 
    });
}

QueryParametroDominioDoc.filtro = function filtro(parametroDocumento){
    return QueryParametroDominioDoc.findAll({
        attributes: filtroAtributos.attributes,
        where : {parametroDocumento: parametroDocumento }
    });
}

var filtroAtributos = {
    attributes: [
                ['se_paradomidoc','idparametro'],
                ['vc_descparam_doc','parametro_descripcion'],
                ['in_idominio_doc','id_dominio'],
                ['in_iidioma','id_idioma'],
                ['vc_codigo','codigo_dominio'],
                ['vc_desc','descripcion_dominio'],
                ['vc_desc_corta','descripcion_corta_dominio'],
                ['in_estado_parametro','parametro_estado'],
                ['in_estado_dominio','dominio_estado']
            ],
}

module.exports = QueryParametroDominioDoc;

/**
 * @author renato Modificado 10-01-2018
 * @author renato creado 18-12-2017 
 */
var Serie = require('../../modelos/msparametrosquery/Serie');

/**
 * Funcion que retorna la tabla T_Maestra segun el campo codigo
 * 
 * @param {*} codigoTabla Se envia el codigo del catalogo
 */
Serie.filtro = function serieFiltro(id_entidad,id_tipo_comprobante,id_tipo_serie){
    var data = Serie.findAll({ attributes: filtroAtributosSerie.attributes ,
        where: {
            idEntidad: id_entidad,
            idTipoComprobante:id_tipo_comprobante,
            idTipoSerie:id_tipo_serie,
            estado: constantes.estadoActivo
        }
      });
    return  data;
}

//atributos utilizados por function maestraFiltro
var filtroAtributosSerie = {
    attributes: [
                'idSerie', 
                'idEntidad',
                'idTipoSerie',
                'direccion',
                'idTipoComprobante',
                'serie',
                'correlativo',
                'idUbigeo',
                'estado'],
}
module.exports = Serie;

//idUbigeo -- codigoUbigeo doc_entidad
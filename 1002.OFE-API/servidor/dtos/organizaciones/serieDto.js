/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var Serie = require('../../modelos/organizaciones/serie');
var DominioEnt = require('../../modelos/organizaciones/dominioEnt')
var tipoDocumento = require('../../modelos/organizaciones/dominioEnt');
/**
 * Funcion que retorna la tabla T_Maestra segun el campo codigo
 * 
 * @param {*} codigoTabla Se envia el codigo del catalogo
 */
Serie.filtro = function serieFiltro(id_entidad,id_tipo_comprobante,id_tipo_serie){
    return Serie.findAll({ attributes: filtroAtributosSerie.attributes ,
        include:[ 
            {
                model: DominioEnt,
                attributes: filtroAtributosDominioEnt.attributes
            }
        ],
        where: {
            idEntidad: id_entidad,
            idTipoComprobante:id_tipo_comprobante,
            idTipoSerie:id_tipo_serie,
            estado: constantes.estadoActivo
        }
      });
}

//atributos utilizados por function maestraFiltro
var filtroAtributosSerie = {
    attributes: [
                ['se_iserie','idSerie'], 
                'idEntidad',
                'idTipoSerie',
                'direccion',
                'idTipoComprobante',
                'serie',
                'correlativo',
                'estado'],
}
var filtroAtributosDominioEnt = {
    attributes: [
        ['vc_codigo','idUbigeo'],
        ['vc_codigo','codigoUbigeo']]
}
module.exports = Serie;

//idUbigeo -- codigoUbigeo doc_entidad
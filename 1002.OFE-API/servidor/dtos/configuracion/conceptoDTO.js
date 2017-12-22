/**
 * @author miguel angel herrera centeno creado 19/12/2017
 */

var Concepto = require("../../modelos/configuracion/concepto");

/**
 * Listar tipos de conceptos
 */
Concepto.listar = function conceptoListar () {
    return Concepto.findAll({
        attributes: atributos.atributos
    });
}
var atributos = {
    atributos: [
        ['se_iconcepto', 'idConcepto'],
        ['se_iidioma', 'idIdioma'],
        'codigo',
        'descripcion',
        'estado'
    ]
}

module.exports = Concepto;
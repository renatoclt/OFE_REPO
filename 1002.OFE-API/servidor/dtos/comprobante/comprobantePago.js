/**
 * @author --- Modificado **-**-****
 * @author renato creado 18-12-2017 
 */
var comprobante = require('../../modelos/comprobantes/comprobantePago')

 /**
 * Funcion que guarda los comprobantes de pago
 * 
 */
comprobante.guardar = function maestraGuardar(){
    return comprobante.save().then(()=>{
        console.log('ingrese y guarde comprobante');
    })
}
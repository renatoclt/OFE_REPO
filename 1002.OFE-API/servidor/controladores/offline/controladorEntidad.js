var EntidadOffline = require('../../dtos/msoffline/queryEntidadOfflineDTO');
var EntidadQuery = require('../../dtos/msoffline/queryEntidadDTO');

var controladorEntidad = async function (ruta, rutaEsp) {
    router.post(ruta.concat('/guardarEntidad'), async function (req, res) {
        let data = req.body;
        try{
            let respuesta = await EntidadOffline.buscar(constantes.idTipoDocumentoRuc, data.ruc);
            if (respuesta == null){
                console.log('ingrese');
                let entidad = {};
                entidad.id = await EntidadOffline.nuevoID();
                entidad.documento = data.ruc;
                entidad.denominacion = data.nombreComercial;
                entidad.nombreComercial = data.nombreComercial;
                entidad.direccion = data.direccion;
                entidad.correo = data.correo;
                entidad.logo = null;
                entidad.pais = constantes.paisPeru;
                entidad.ubigeo = null;
                entidad.tipoDocumento = constantes.tipoDocumentoRuc;
                entidad.idTipoDocumento = constantes.idTipoDocumentoRuc;
                entidad.idEbiz = null;
                entidad.usuarioCreacion = constantes.usuarioOffline;
                entidad.usuarioModificacion = constantes.usuarioOffline;
                entidad.fechaCreacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                entidad.fechaModificacion = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                entidad.estado = constantes.estadoActivo;
                entidad.fechaSincronizado = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
                entidad.estadoSincronizado = constantes.estadoInactivo;
                await EntidadOffline.guardar(entidad);
                await EntidadQuery.guardar(entidad);
            }
        }
        catch(e){
            console.log(e);
        }
        res.json({})
    });
}
module.exports = controladorEntidad;
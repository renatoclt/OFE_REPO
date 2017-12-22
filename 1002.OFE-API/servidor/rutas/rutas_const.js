/**
 * @author Roycer Cordova
 * @description Objecto de tipo json que contiene las constantes de las rutas de los servicios
 */
var rutas = {
    "nav":{
        "ruta": "/v1",
        "hijos":{
            "prueba":{
                "ruta":"",
                "hijos":{
                    "usuario":      { "ruta": "/usuario",       "descripcion": "Implementacion de servicio rest, para el demo"},
                    "saludo":       { "ruta": "/saludo",        "descripcion": "Prueba de de servicio rest"},
                    "persona":      { "ruta": "/persona",       "descripcion": "Prueba de conexion con knex"},
                    "hateoas":      { "ruta": "/hateoas",       "descripcion": "prueba de uso de Hateoas-Link"},
                    "user":         { "ruta": "/user",          "descripcion": "prueba de conexion con Sequelize"}
                }
            },
            "productos":{
                "ruta":"",
                "hijos":{
                    "productos":    { "ruta":"/productos",      "descripcion": ""}
                }
            },
            "entidades":{
                "ruta":"",
                "hijos":{
                    "natural": {"ruta":"/natural", "descripcion": "Implementacion de servicio rest para persona natural"},
                    "juridico": {"ruta":"/juridico", "descripcion": "Implementacion de servicio rest para persona juridica"}
                }
            },
            "parmqry":{
                "ruta":"",
                "hijos":{
                    "tipoafectacionigv":{"ruta":"/tipoafectacionigv", "descripcion": "Implementacion de servicio rest para obtener el tipo de afectacion IGV"},
                    "maestra":{"ruta":"/maestra", "descripcion": "Implementacion de servicio rest para la tabla maestra"},
                    "tipoprecioventa":  {"ruta":"/tipoprecioventa", "descripcion":"Implementacion de servicio rest para listar los tipos de precio de venta"},
                    "concepto": {"ruta":"/concepto", "descripcion": "Imprementacion de servicios conceptos"} 
                }
            }
        }
    }
}

module.exports = rutas;
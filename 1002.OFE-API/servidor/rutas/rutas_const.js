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
            "docucmd":{
                "ruta":"",
                "hijos":{
                    "documento":{"ruta":"/documentos", "descripcion": "Implementacion de servicio rest para guardar documentos en la base de datos"},
                    "retenciones":{"ruta":"/retenciones", "descripcion": "Implementacion de servicio rest obtener retenciones de la base de datos"},
                    "facturas":{"ruta":"/facturas", "descripcion": "Implementacion de servicio rest obtener facturas de la base de datos"},
                    "boletas":{"ruta":"/boletas", "descripcion": "Implementacion de servicio rest obtener boletas de la base de datos"},
                    //"guiasremision":{"ruta":"/guiasremision", "descripcion": "Implementacion de servicio rest obtener guias de remision de la base de datos"}
                    "percepciones":{"ruta":"/percepciones", "descripcion": "Implementacion de servicio rest obtener percepciones de la base de datos"},
                    "documentoquery": {"ruta":"/documento", "descripcion":"Implementacion de servicio rest para listar tipos de comprobantes"},
                    "baja":{"ruta":"/baja","descripcion":"Implementacion de servicio rest para listar tipos de comprobantes"},
                    "pdfretencion":{"ruta":"/pdfretencion","descripcion":"Implementacion del servicio de descarga de archivos pdf"}
                }
            },
            "docuqry":{
                "ruta":"",
                "hijos":{
                    "referencias":{"ruta":"/referencias", "descripcion": "Implementacion de servicio rest para gestionar referencias_query en la base de datos"}
                }
            },
            "orgacmd":{
                "ruta":"",
                "hijos":{
                    "organizaciones":{"ruta":"/organizaciones", "descripcion": "Implementacion de servicio rest para gestionar referencias_query en la base de datos"}
                }
            },
            "parmqry":{
                "ruta":"ms-documentos-query",
                "hijos":{
                    "tipoafectacionigv":{"ruta":"/tipoafectacionigv", "descripcion": "Implementacion de servicio rest para obtener el tipo de afectacion IGV"},
                    "maestra":{"ruta":"/maestra", "descripcion": "Implementacion de servicio rest para la tabla maestra"},
                    "tipoprecioventa":  {"ruta":"/tipoprecioventa", "descripcion":"Implementacion de servicio rest para listar los tipos de precio de venta"},
                    "concepto": {"ruta":"/concepto", "descripcion": "Imprementacion de servicios conceptos"},
                    "series":  {"ruta":"/seriess", "descripcion":"Implementacion de servicio rest para listar las series de offline"},
                    "estadoComprobante": {"ruta":"/estadoscomprobante", "descripcion":"Implementacion de servicio rest para listar los estados comprobantes"},
                   
                }
            },
            "offline":{
                "ruta":"",
                "hijos":{
                    "sincronizacion": {"ruta":"/sincronizacion", "descripcion":"Implementacion de servicio rest para listar los elementos a sincronizar"},
                    "usuario": {"ruta":"/usuarios", "descripcion": "Implementacion de servicio rest para usuarios del offline"},
                    "idioma": {"ruta":"/idiomas", "descripcion": "Idioma Servicio"}
                }
            },            
        }
    }
}

module.exports = rutas;
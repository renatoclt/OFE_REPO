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
            }
        }
    }
}

module.exports = rutas;
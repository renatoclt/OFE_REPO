conf = require('./configuracion')['knex'];

var knex = require("knex")({
    client: conf.cliente,
    connection: {
        filename: conf.almacenamiento
    },
    useNullAsDefault: false
});

module.exports = knex;
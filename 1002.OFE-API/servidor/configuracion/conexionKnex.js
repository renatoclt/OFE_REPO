conf = require(`${__dirname}/configuracion.json`)['knex'];

var knex = require("knex")({
    client: conf.cliente,
    connection: {
        filename: conf.almacenamiento
    },
    useNullAsDefault: false
});

module.exports = knex;
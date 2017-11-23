var knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "../1002.OFE-DATABASE/dbPrueba.sqlite"
  },
  useNullAsDefault: false
});

module.exports = knex;
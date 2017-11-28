var knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./dbPrueba.sqlite"
  },
  useNullAsDefault: false
});

module.exports = knex;
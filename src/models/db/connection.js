const pgp = require('pg-promise')();

const connection = {
  host: 'localhost', //config.db.host
  port: 5432,
  database: 'simple_book_store' // config.db.name
};

const db = pgp(connection);

module.exports = db;

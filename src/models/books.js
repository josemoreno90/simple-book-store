const db = require("./db/books")

//additional functions that operate on Books data will be defined here

module.exports = {
  create: db.create,
  findAll: db.findAll
}

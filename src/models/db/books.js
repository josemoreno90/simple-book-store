const db = require('./connection');

function create(book) {
  db.query(`INSERT INTO books (title, author, genre)
            VALUES(${title}, ${author}, ${genre}) RETURNING *`, book)
            .then(post => {
              return post[0]
            })
            .catch(error => {
              console.log("Error while executing book.create")
              throw error;
            })
}

function findAll() {
  return db.query(`SELECT * FROM books LIMIT 10`)
  .catch(error => {
    console.error("Error while executing book.viewAll")
    throw error
  })
}

//  function findByOffset(offset, limit) {
//   return db.query(`
//     SELECT * FROM books WHERE offset = $1 LIMIT $2
//   `, [offset, limit])
// }

function search(searchType, searchTerm) {
  return db.query(`SELECT * FROM books WHERE UPPER(${searchType})  LIKE '%${searchTerm}%'`, [searchType, searchTerm])
    .then(result => {
      return result
    })
  .catch(error => {
    console.error("Error while executing book.search")
    throw error
  })

}
// k
module.exports = { create, findAll, /* findByOffset ,*/ search };

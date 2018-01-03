const db = require('./connection');

// db.query('SELECT * FROM books')
//   .then(posts => {
//     console.log(posts)
//   })

  function create(book) {
    db.query(`INSERT INTO books (title, author, genre)
              VALUES(${title}, ${author}, ${genre}) RETURNING *`, book)
                .then(post => {
                  return posts[0]
                })
                .catch(error => {
                    console.error("Error while executing book.create")
                    throw error
                })
  }

  function viewAll() {
    return db.query(`SELECT * FROM books`)
    .catch(error => {
      console.error("Error while executing book.viewAll")
    })
  }

const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const books = require("./models/books.js")


app.use(bodyParser.json({ extended: true }));

app.use(express.static('src/public'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views');


app.get('/', (req, res, next) => {
  books.findAll()
  .then(books => {
    res.render("home", {books})
  })
})

app.get('/book-details/:book', (req, res, next) => {
  books.findAll()
  .then(books => {
    res.render("home", {books})
  })
})

app.get('/search', (req, res, next) => {
  let searchType = req.query.searchType.toUpperCase();
  let searchTerm = req.query.searchTerm.toUpperCase();
  books.search(searchType, searchTerm)
  .then((matchedBooks) => {
    res.render("search", {matchedBooks, searchType, searchTerm})
  })
})




app.listen(3000, () => console.log("Listening loud and clear"));

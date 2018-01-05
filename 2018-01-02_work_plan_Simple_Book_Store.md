# Practice Phase Work Plan

### Overview & Weekly Goal
- I'll be building a web app for a bookstore that helps  manage inventory.  I'll create a content management system which will allows users to view, add, delete, and update books. Books entered in the system can be viewed in a list, as a single entry on its own page, or searched for using basic searches (by title, author, or genre).

### Specifications
- You should be able to create a book
- You should be able to go to the "/" page and see all the books in DB.
- You should be able to click a book and see the "book-details page".
- You should be able to edit any book in the database
- You should be able to search the DB for book by author, title, or genre.

### Implementation Plan
1. Identify nouns in Specs
  - books

2. Build schema for the nouns.

3. Identify all verbs in my specs (verbs associated with noun)
  - books
    - viewAllBooks
    - createBook
    - editBook
    - deleteBook
    - searchBooks
      - searchByTitle
      - searchByAuthor
      - searchByGenre

4. Write database functions for all VERBS identified in step 4.
  4.1
  - add pg-promise as a dependency
  - add a way to connect to postgres using pg-promise

5. Use express to build the routes for viewing all books.
  - install express as a dependency
  - create a GET route for `/` which lists all books,
  - create a GET route for `/search` which lists books searched for,
  - create a GET route for `/book-detail` which shows book clicked on from home and search route,
  - create an EJS template for routes

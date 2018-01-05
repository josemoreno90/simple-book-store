\c simple_book_store

COPY books(title,author,genre,height,publisher)
FROM '/Users/josemoreno/Desktop/SimpleBookStore/src/public/books.csv' DELIMITER ',' CSV;

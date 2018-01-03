const router = require("express").Router();
const books = require("../../models/books")

router.get("/", (req,res,next) => {
  books.findAll
})

const router = require("express").Router();
const books = require("./books")

router.use("/", books)

module.exports = router

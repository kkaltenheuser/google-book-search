// set var + routes
const router = require("express").Router();
const booksController = require("../../controllers/booksController.js");

// matches with api/books
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// matches with api/books/:id
router.route("/:id")
    .delete(booksController.remove);
  
//export
module.exports = router;
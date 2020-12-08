// set var 
const router = require("express").Router();
const bookRoutes = require("./books");

// use bookRoutes
router.use("/books", bookRoutes);

// export
module.exports = router;
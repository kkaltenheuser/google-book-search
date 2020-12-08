// set var + dependencies
const mongoose = require("mongoose")
const Schema = mongoose.Schema
// launch var + set schema details 
const bookSchema = new Schema({
    title: { type: String, required: true},
    authors: {type: Array, required: true},
    description: { type: String, required: true},
    image: { type: String, required: true},
    link: { type: String, required: true},
    date: { type: Date, default: Date.now }
})
// connect to mongoose
const Book = mongoose.model("Book", bookSchema)
// export
module.exports = Book;
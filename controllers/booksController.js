// dev + var
const db = require("../models")

// set up controller in routes
module.exports = {
    findAll: (req, res) => {
        db.Book.find(req.query).sort({ date: -1 }).then(books => {
            res.json(books)
        }).catch(err => {
            res.status(418).json(err)
        })
    },
    create: (req, res) => {
        db.Book.create(req.body).then(book => {
            res.json(book)
        }).catch(err => {
            res.status(418).json(err)
        })
    },
    remove: (req, res) => {
        db.Book.findById({ _id: req.params.id }).then(book => {
            book.remove()
        }).then(book => {
            res.json(book)
        }).catch(err => {
            res.status(418).json(err)
        })
    }
}
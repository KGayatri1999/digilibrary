const express = require("express")
const router = express.Router()
const Book = require('../models/book')

router.get('/', async (req,res)=>{
    let books 
    try {
        books = await Book.find().sort({createdAt:'desc'}).limit(10).exec()
    }
    catch {
        books = []
    }

    //res.send("Hello Gayatri")
    res.render('index', {books: books})
});

module.exports = router



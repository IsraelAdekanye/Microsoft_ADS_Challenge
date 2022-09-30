const express = require("express");
const { getBooks, createBook, getOneBook, deleteBook, getBooksByAuthor, getBooksByPublisher } = require("../controllers/booksController");


const router = express.Router();

router.get('/', getBooks);

router.post('/', createBook)

router.get('/:book_ID', getOneBook)

router.delete('/:book_ID', deleteBook)

router.get('/ByAuthor', getBooksByAuthor)

router.get('/ByPublisher', getBooksByPublisher)

module.exports = router;

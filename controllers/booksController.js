const Book = require("../models/booksModel");

// GET SINGLE BOOK
const getOneBook = async (req, res) => {
    const {book_ID} = req.params

    //Find Single Doc in DB
    const book = await Book.find({book_ID});
    if(book.length<1) {
        res.status(400).send({error: `No Book with ID: "${book_ID}" found`});
        return;
    }
    res.status(200).send(book)
}

// DELETE BOOK
const deleteBook = async (req, res) => {
    const { book_ID } = req.params

    //Find Single Doc in DB by Bood ID and Delete
    const book = await Book.findOneAndDelete({book_ID});
    // if(book.length<1) {
    //     res.status(400).send({error: `No Book with ID: "${book_ID}" found`});
    //     return;
    // }
    res.send(book)
}

// GET ALL BOOKS
const getBooks = async (req, res) => {

    //Find all Docs in DB
    try {
        const books = await Book.find({});
        res.status(200).json(books)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// CREATE NEW BOOK
const createBook = async (req, res) => {
    const { book_ID, 
            book_title, 
            book_edition, 
            book_author, 
            book_publisher, 
            book_copies,
            book_costs,
            book_remarks
        } = req.body

    //Add Book Doc to DB
    try {
        const book = await Book.create({    book_ID, 
                                            book_title, 
                                            book_edition, 
                                            book_author, 
                                            book_publisher, 
                                            book_copies,
                                            book_costs,
                                            book_remarks 
                                        });
        res.status(200).json(book)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// GET BOOKS BY AUTHOR
const getBooksByAuthor = async (req, res) => {
    //const { book_author } = req.params
    //Find all Docs in DB and sort by Book Author
    try {
        const books = await Book.find({}).sort({book_author});
        res.status(200).json(books)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// GET BOOKS BY PUBLISHER
const getBooksByPublisher = async (req, res) => {
    //const { book_publisher } = req.params
    //Find all Docs in DB and Sort by Book Publisher
    try {
        const books = await Book.find({}).sort({book_publisher});
        res.status(200).json(books)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getBooks, createBook, getOneBook, deleteBook, getBooksByAuthor, getBooksByPublisher
}
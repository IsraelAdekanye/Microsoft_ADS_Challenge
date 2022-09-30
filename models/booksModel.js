const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    book_ID: {
    type: Number,
    required: true,
    lowercase: true
  },
  book_title: {
    type: String,
    required: true,
    lowercase: true
  },
  book_edition: {
    type: String,
    required: true,
    lowercase: true
  },
  book_author: {
    type: String,
    required: true,
    lowercase: true
  },
  book_publisher: {
    type: String,
    required: true,
    lowercase: true
  },
  book_copies: {
    type: Number,
    required: true,
    lowercase: true
  },
  book_costs: {
    type: Number,
    required: true,
    lowercase: true
  },
  book_remarks: {
    type: String,
    required: true,
    lowercase: true
  }
}, {timestamps: true});

module.exports = mongoose.model("Book", booksSchema);
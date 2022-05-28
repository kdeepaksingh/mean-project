const mongoose = require('mongoose');

const booksShema = new mongoose.Schema({
    bookName: {
        type: String,
    },
    bookPrice: {
        type: Number,
    },
    desBook: {
        type: String,
    }
});

const bookModel = new mongoose.model("Book", booksShema);

module.exports = bookModel;
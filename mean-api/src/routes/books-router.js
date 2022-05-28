const express = require('express');
const router = express.Router();
const bookModel = require('../models/books-model');

// //base url path: http://localhost:8000/bookapi/add


// GET ALL books 

router.get('/find', async (req, res) => {
    try {
        const bookList = await bookModel.find({}).sort({ "bookName": 1 });
        const recordCount = bookList.length;
        res.status(200).send({ status: 200, message: "Fetched All Books!", recordCount: recordCount, results: bookList });
    } catch (err) {
        res.status(500).send(`Unable To Fetch The Book Details ${err}`);
    }
});

// GET Specific book

router.get('/find/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const specificBook = await bookModel.find({ _id }).sort({ "bookName": 1 });
        recordCount = specificBook.length;
        res.status(200).send({ status: 200, message: "Fetched Perticular Book!", recordCount: recordCount, results: specificBook });
    } catch (err) {
        res.status(500).send(`Unable to find this book for this perticular Id ${err}`);
    }
});

// post book Details

router.post('/add', async (req, res) => {
    try {
        const addBooks = new bookModel(req.body);
        console.log(addBooks);
        const InsertBook = await addBooks.save();
        const recordCount = InsertBook.length;
        res.status(200).send({ status: 200, message: "Book Added Successfully!!", recordCount: recordCount, results: InsertBook });
    } catch (err) {
        res.status(500).send(`Unable To Register Book ${err}`);
    }
});

// Update perticular book  Deatils

router.patch('/update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedBook = await bookModel.findByIdAndUpdate(_id, req.body, { new: true });
        const recordCount = updatedBook.length;
        res.status(200).send({ status: 200, message: "Book Updated Successfully!", recordCount: recordCount, result: updatedBook })
    } catch (err) {
        res.status(500).send(`Error in Updated book ${err}`);
    }
});

// Remove perticular book  Deatils

router.delete('/remove/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const removeBook = await bookModel.findByIdAndDelete({ _id });
        const recordCount = removeBook.length;
        res.status(200).send({ status: 200, message: "Book Is Deleted Successfully!", recordCount: recordCount, result: removeBook });
    } catch (err) {
        res.status(500).send(`Error in Book Deletion ${err}`);
    }
});

module.exports = router;
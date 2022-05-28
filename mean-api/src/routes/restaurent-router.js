const express = require('express');
const router = express.Router();
const restaurentModel = require('../models/restaurent-model');

// //base url path: http://localhost:8000/restaurentapi/add


// GET ALL Restaurents 

router.get('/find', async (req, res) => {
    try {
        const restaurentList = await restaurentModel.find({}).sort({ "fullName": 1 });
        const recordCount = restaurentList.length;
        res.status(200).send({ status: 200, message: "Fetched All Restaurent Records!", recordCount: recordCount, results: restaurentList });
    } catch (err) {
        res.status(500).send(`Unable To Fetch Restaurent Details ${err}`);
    }
});

// GET Specific Restaurent

router.get('/find/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const specificRestaurent = await restaurentModel.find({ _id }).sort({ "fullName": 1 });
        recordCount = specificRestaurent.length;
        res.status(200).send({ status: 200, message: "Fetched Perticular Restaurent!", recordCount: recordCount, results: specificRestaurent });
    } catch (err) {
        res.status(500).send(`Unable to find this Restaurent for this perticular Id ${err}`);
    }
});

// post Restaurent Details

router.post('/add', async (req, res) => {
    try {
        const addRestaurent = new restaurentModel(req.body);
        console.log(addRestaurent);
        const insertRestaurent = await addRestaurent.save();
        const recordCount = insertRestaurent.length;
        res.status(200).send({ status: 200, message: "Restaurent Added Successfully!!", recordCount: recordCount, results: insertRestaurent });
    } catch (err) {
        res.status(500).send(`Unable To Register Restaurent ${err}`);
    }
});

// Update perticular Restaurent  Deatils

router.patch('/update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateRestaurent = await restaurentModel.findByIdAndUpdate(_id, req.body, { new: true });
        const recordCount = updateRestaurent.length;
        res.status(200).send({ status: 200, message: "Restaurent Updated Successfully!", recordCount: recordCount, result: updateRestaurent })
    } catch (err) {
        res.status(500).send(`Error in Updated Restaurent ${err}`);
    }
});

// Remove perticular Restaurent  Deatils

router.delete('/remove/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const removeRestaurent = await restaurentModel.findByIdAndDelete({ _id });
        const recordCount = removeRestaurent.length;
        res.status(200).send({ status: 200, message: "Restaurent Is Deleted Successfully!", recordCount: recordCount, result: removeRestaurent });
    } catch (err) {
        res.status(500).send(`Error in Restaurent Deletion ${err}`);
    }
});

module.exports = router;
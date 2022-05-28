const express = require('express');
const router = express.Router();
const sfmsModel = require('../models/sfms-model');

// //base url path: http://localhost:8000/sfmsapi/add


// GET ALL Students 

router.get('/find', async (req, res) => {
    try {
        const studentList = await sfmsModel.find({}).sort({ "firstName": 1 });
        const recordCount = studentList.length;
        res.status(200).send({ status: 200, message: "Fetched All Student Records!", recordCount: recordCount, results: studentList });
    } catch (err) {
        res.status(500).send(`Unable To Fetch Student Details ${err}`);
    }
});

// GET Specific Student

router.get('/find/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const specificStudent = await sfmsModel.find({ _id }).sort({ "firstName": 1 });
        recordCount = specificStudent.length;
        res.status(200).send({ status: 200, message: "Fetched Perticular Student!", recordCount: recordCount, results: specificStudent });
    } catch (err) {
        res.status(500).send(`Unable to find this Student for this perticular Id ${err}`);
    }
});

// post Student Details

router.post('/add', async (req, res) => {
    try {
        const addStudent = new sfmsModel(req.body);
        console.log(addStudent);
        const inserStudent = await addStudent.save();
        const recordCount = inserStudent.length;
        res.status(200).send({ status: 200, message: "Student Added Successfully!!", recordCount: recordCount, results: inserStudent });
    } catch (err) {
        res.status(500).send(`Unable To Register Student ${err}`);
    }
});

// Update perticular Student  Deatils

router.patch('/update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedStudent = await sfmsModel.findByIdAndUpdate(_id, req.body, { new: true });
        const recordCount = updatedStudent.length;
        res.status(200).send({ status: 200, message: "Student Updated Successfully!", recordCount: recordCount, result: updatedStudent })
    } catch (err) {
        res.status(500).send(`Error in Updated Student ${err}`);
    }
});

// Remove perticular Student  Deatils

router.delete('/remove/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const removeStudent = await sfmsModel.findByIdAndDelete({ _id });
        const recordCount = removeStudent.length;
        res.status(200).send({ status: 200, message: "Student Is Deleted Successfully!", recordCount: recordCount, result: removeStudent });
    } catch (err) {
        res.status(500).send(`Error in Student Deletion ${err}`);
    }
});

module.exports = router;
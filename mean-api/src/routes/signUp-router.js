const express = require('express');
const router = express.Router();
const signUpModel = require('../models/signUp-model');

// //base url path: http://localhost:8000/signUpApi/add


// GET ALL SignUp 

router.get('/find', async (req, res) => {
    try {
        const signUpList = await signUpModel.find({}).sort({ "firstName": 1 });
        const recordCount = signUpList.length;
        res.status(200).send({ status: 200, message: "Fetched All SignUp Records!", recordCount: recordCount, results: signUpList });
    } catch (err) {
        res.status(500).send(`Unable To Fetch SignUp Details ${err}`);
    }
});

// GET Specific SignUp

router.get('/find/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const specificSignUp = await signUpModel.find({ _id }).sort({ "firstName": 1 });
        recordCount = specificSignUp.length;
        res.status(200).send({ status: 200, message: "Fetched Perticular SignUp!", recordCount: recordCount, results: specificSignUp });
    } catch (err) {
        res.status(500).send(`Unable to find this SignUp for this perticular Id ${err}`);
    }
});

// post SignUp Details

router.post('/add', async (req, res) => {
    try {
        const addSignUp = new signUpModel(req.body);
        console.log(addSignUp);
        const insertSignUp = await addSignUp.save();
        const recordCount = insertSignUp.length;
        res.status(200).send({ status: 200, message: "SignUp Added Successfully!!", recordCount: recordCount, results: insertSignUp });
    } catch (err) {
        res.status(500).send(`Unable To Register SignUp ${err}`);
    }
});

// Update perticular SignUp  Deatils

router.patch('/update/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updateSignUp = await signUpModel.findByIdAndUpdate(_id, req.body, { new: true });
        const recordCount = updateSignUp.length;
        res.status(200).send({ status: 200, message: "SignUp Updated Successfully!", recordCount: recordCount, result: updateSignUp })
    } catch (err) {
        res.status(500).send(`Error in Updated SignUp ${err}`);
    }
});

// Remove perticular SignUp  Deatils

router.delete('/remove/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const removeSignUp = await signUpModel.findByIdAndDelete({ _id });
        const recordCount = removeSignUp.length;
        res.status(200).send({ status: 200, message: "SignUp Is Deleted Successfully!", recordCount: recordCount, result: removeSignUp });
    } catch (err) {
        res.status(500).send(`Error in SignUp Deletion ${err}`);
    }
});

module.exports = router;
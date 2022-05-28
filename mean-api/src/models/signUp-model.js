const mongoose = require('mongoose');

const signUpShema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    mobileNo: {
        type: Number,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
    },
    cpassword: {
        type: String,
    }
});

const signUpModel = new mongoose.model("SignUp", signUpShema);

module.exports = signUpModel;
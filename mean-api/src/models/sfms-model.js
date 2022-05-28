const mongoose = require('mongoose');

const sfmsShema = new mongoose.Schema({
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
    fees: {
        type: Number,
    }
});

const sfmsModel = new mongoose.model("Student", sfmsShema);

module.exports = sfmsModel;
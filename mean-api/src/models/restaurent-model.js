const mongoose = require('mongoose');

const restaurentShema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    orderNo: {
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
    service: {
        type: String,
    }
});

const restaurentModel = new mongoose.model("Hotel", restaurentShema);

module.exports = restaurentModel;
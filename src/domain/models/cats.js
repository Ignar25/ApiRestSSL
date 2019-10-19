const mongoose = require('mongoose');

CatsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    owner: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('cat', CatsSchema);
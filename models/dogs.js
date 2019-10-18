const mongoose = require('mongoose');

DogsSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Dog', DogsSchema);
const mongoose = require('mongoose');

const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    surname: {
        type: String,
        required: false
    },
    regDate: {
        type: Date,
        default: Date.now,
        required: false
    } 
});

module.exports = mongoose.model('Person', PersonSchema, 'persons');
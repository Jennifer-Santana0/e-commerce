const mongoose = require('mongoose')


const User = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    passaword: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('user',User)

const mongoose = require('mongoose')


const Cart = new mongoose.Schema({
    product_name: {
        type: String,
        require: true
    },
    product_price: {
        type: Number,
        require: true
    },
    product_img: {
        type: String,
        require: true
    },
    product_quantity: {
        type: Number,
        default: 1
    },
    product_id: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('cart', Cart)
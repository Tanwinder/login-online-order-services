const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const BuyNow = new Schema({
    couponUsed: Boolean,
    customer: {
        gender: String,
        age: Number,
        email: String,
        satisfaction: Number
    },
    items: [{
        name: String,
        tags: [String],
        price: {
            numberDecimal: String
        },
        quantity: Number
    }],
    purchaseMethod: String,
    saleDate: {
        type: Date
    },
    storeLocation: String,
    _id: String
});



module.exports = model('BuyNow', BuyNow);
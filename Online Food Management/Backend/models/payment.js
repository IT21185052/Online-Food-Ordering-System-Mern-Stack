const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const Schema = mongoose.Schema;
const paymentSchema =  new Schema({

    PaymentID : {
        type : String,
        required: true
    },
    Type:{
        type: String,
        required : true
    },
    Quantity:{
        type: Number,
        required:true
    },
    Total:{
        type: Number,
        required:true
    }
    
})

const payment = mongoose.model("payment",paymentSchema);
module.exports = payment;
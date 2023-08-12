const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,'Please enter the name of product'],
        maxlength:[20,'product name should be less than 20']
    },
    quantity:{
        type:Number,
        required:[true,'please enter the quantity'],
        maxlength:[100,'quantity should be less than  100']
    },
    price:{
        type:Number,
        required:[true,'please enter the price of product']
    },
    image:{
        type:String,
        required:false
    }
    },
    {
        timestamps:true
    }
);

const product = mongoose.model('product',productSchema);
module.exports =product;
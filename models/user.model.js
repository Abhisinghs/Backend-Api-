const mongoose = require('mongoose')


const product = new mongoose.Schema({
    name:{
        type:String,
        required : [true,'Name is rquired '],
        maxlength: [20,'length should be less than 20']
    },
    email:{
        type: String,
        required : [true,'email is required '],
    }
})

const product1 = mongoose.model('product1',product);
module.exports =product1;
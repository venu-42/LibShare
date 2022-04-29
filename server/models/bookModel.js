const mongoose = require('mongoose');
const validator = require('validator') 
const bcrypt = require('bcryptjs');

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'A name must be required']
    },
    author:{
        type:String,
        required:[true,'Author name must be required'],
        lowercase:true
    },
    photo:{
        type:String,
        default:'/DP.jpg'
    },
    price:[Number,'Price must be required'],
    rating:{
        type:Number,
        default:3
    },
    tags:[{
        type:String
    }],
    owner:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
})


const Book = mongoose.model('Book',bookSchema);

module.exports = Book;
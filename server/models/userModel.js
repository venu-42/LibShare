const mongoose = require('mongoose');
const validator = require('validator') 
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'A name must be required']
    },
    email:{
        type:String,
        required:[true,'A name must be required'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Email must be valid']
    },
    photo:{
        type:String,
        default:'/DP.jpg'
    },
    password:{
        type:String,
        required:[true,'A password must be required'],
        minLength:8,
        //* passwords are hidden by default when find query is executed but not when returning the document while creating**
        select:false
    },
    //* confirm password is just used untill mongoose and not stored in mongoDB bcoz mongoose verifies that both are same.
    confirmPassword:{
        type:String,
        required:[true,'A confirm password must be required'],
        validate:{
            validator:function(value){
                return value===this.password
            },
            message:'Password should match with confirmPassword'
        }
    },
    DOB:Date,
    contact:[Number,'A phone number must be required'],
    wishlist:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Book'
        }
    ]
    ,
    books:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Book'
        }
    ],
    rentedBooks:[
        {
            type:mongoose.Schema.ObjectId,
            ref:'Book'
        }
    ]
})

//* the following middleware runs after the validators in schema ran
userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,12)
    this.confirmPassword = undefined
    next();
})

const User = mongoose.model('User',userSchema);

module.exports = User;
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('../utils/appError');
const bcrypt = require('bcryptjs/dist/bcrypt');
const res = require('express/lib/response');

exports.signup = catchAsync(async (req,res,next) =>{
    const newUser = await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    });
    const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRESIN
    })
    res.status(201).json({
        status:"success",
        token,
        data:{
            user:newUser
        }
    })
})


exports.login = catchAsync(async (req,res,next) =>{
    // console.log(req.headers);
    const {email, password}= req.body;
    
    if(email){
        //1) check if user exists
        // have to explicitly selct password because on find queries it has been deselected by default
        const user = await User.findOne({email}).select('+password')
        if(!user){
            return next(new AppError('User not found or token expired'),400)
        }
        // 2) check if passwords match
        const areMatched = await bcrypt.compare(password,user.password)
        if(!areMatched) return next(new AppError('Please provide correct credentials!'),400);

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRESIN
        })
        user.password = undefined
        // 3) send the token
        res.status(200).json({
            status:'success',
            token,
            data:{user}
        })
        return 
    }
    else{
        const token = req.headers.authorization;
        const payload = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(payload.id)

        if(!user) next(new AppError('User not found or token expired'),400)
        res.status(200).json({
            status:'success',
            token,
            data:{
                user
            }
        })
    }
    
    
})
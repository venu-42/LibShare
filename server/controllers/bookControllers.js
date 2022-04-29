const Book = require('../models/bookModel');
const User = require('../models/userModel')
const catchAsync = require('../utils/catchAsync');

exports.getAllBooks = async (req,res,next)=>{
    let books = await Book.find().populate("owner").select('-owner.photo -owner.books');
    // for(let i=0;i<books.length;i++){
    //     let user=await User.findById(books[i].owner)
    //     books[i].ownerName= user.name;
    //     console.log(books[i]);
    // }
    console.log(books)
    res.status(200).json({
        status:"success",
        data:{
            books
        }
    })
}


exports.getBook = catchAsync(async (req,res,next)=>{
    const book = await Book.findById(req.params.id);

    if(!book){
        return next(new AppError('Book not found',404))
    }

    res.status(200).json({
        status:"success",
        data:{
            book
        }
    })
})


exports.addBook = catchAsync( async (req,res,next)=>{
    const newBook = await Book.create(req.body);
    res.status(201).json({
        status:"created",
        data:{
            book:newBook
        }
    })
})

exports.editBook = catchAsync( async (req,res,next)=>{
    const newBook = await Book.findByIdAndUpdate(req.body.id,req.body,{
        new:true,
        runValidators:true
    });

    //! mongoose don't give a error here because ID is valid and only the book is not found. hence we need to explicilty call for error
    //! this can also be done in the way done in getBook controller above
    if(!newBook){
        return next(new AppError('Book not found',404))
    }
    res.status(201).json({
        status:"created",
        data:{
            book:newBook
        }
    })
})

exports.deleteBook = catchAsync( async (req,res,next)=>{
    const book = await Book.findByIdAndDelete(req.params.id);

    //! mongoose dont give an error for following
    if(!book){
        return next(new AppError('Book not found',404))
    }

    res.status(204).json({
        status:"success",
        data:null
    })
})
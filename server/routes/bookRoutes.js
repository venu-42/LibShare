const express = require('express');
const router = express.Router();

const bookControllers = require('../controllers/bookControllers')

router.route('/')
.get(bookControllers.getAllBooks)
.post(bookControllers.addBook);


router.route('/:id')
.get(bookControllers.getBook)
.patch(bookControllers.editBook)
.delete(bookControllers.deleteBook);


module.exports = router;
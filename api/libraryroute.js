const express = require('express');
const books = require('./librarycontoller')

const router = express.Router();

router.route('/library').get(books);

module.exports = router;

'use strict';

const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: Boolean,
});

module.exports = mongoose.model('book', bookSchema);
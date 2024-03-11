'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const Book = require('./model/book.js')

const DATABASE_URL = process.env.DATABASE_URL;

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/books', async (request, response) => {
  let documents = await Book.find(); // should return every model instance in the DB
  response.send(documents);
})

mongoose.connect(DATABASE_URL)
.then(() => {
  app.listen(PORT, () => {
    console.log('Server is listening! ', PORT);
  });
})
.catch(e => {
  console.log('DB Connection issue', e);
});

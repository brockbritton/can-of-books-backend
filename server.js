'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const Book = require('./model/book.js')

const DATABASE_URL = process.env.DATABASE_URL;

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/books', async (request, response) => {
  let documents = await Book.find(); // should return every model instance in the DB
  response.send(documents);
});

app.post('/books', async (request, response) => {
  try {
    let json = request.body;
    console.log('HERE ARE THE BOOK VALUES', json);
    let newBooks = await Book.create(json);
    response.send(newBooks);
  } catch (error) {
    response.status(500)
  }
})

app.delete('/books/:id', async (request, response) => {
  let id = request.params.id;
  console.log('BOOK ID TO REMOVE', id);
  let result = await Book.findByIdAndDelete(id);
  if (result) {
    response.status(204).send('OK');
  } else {
    response.status(400)
  }
});

mongoose.connect(DATABASE_URL)
.then(() => {
  app.listen(PORT, () => {
    console.log('Server is listening! ', PORT);
  });
})
.catch(e => {
  console.log('DB Connection issue', e);
});
